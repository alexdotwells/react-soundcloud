import SC from 'soundcloud';

export default class ScService {
    
    static async getFavorites() {
        let userId = 63317612;

        // Initialize SoundCloud Client
        SC.initialize({
            client_id: '##Client_ID##',
            redirect_uri: 'http://localhost:3000/callback'
        });  

        // Get User Favorites from SC API
        let res = await SC.get(`/users/${userId}/favorites`,{
            limit: 300,
            linked_partitioning: 1        
        })

        // Clean-up response data
        res.collection.forEach(t => ScService.convertTrackDetails(t));

        return res.collection;
    }

    static convertTrackDetails(track) {
        // Modify time to mm:ss
        let minutes = Math.floor(track.duration / 60000);
        let seconds = ((track.duration % 60000) / 1000).toFixed(0);
        track.duration = (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

        // Modify artwork image size
        track.artwork_url = (track.artwork_url != null) ? track.artwork_url = track.artwork_url.replace("-large","-t300x300") : "";

        return track;
    }
}
