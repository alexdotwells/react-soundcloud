import SC from 'soundcloud';

export default class ScService {
    
    static async getFavorites() {
        let userId = 63317612;

        // Initialize SoundCloud Client
        SC.initialize({
            client_id: '##CLIENT_ID##',
            redirect_uri: 'http://localhost:3000/callback'
        });  

        // Get User Favorites from SC API
        let res = await SC.get(`/users/${userId}/favorites`,{
            limit: 300,
            linked_partitioning: 1        
        })

        // Modify artwork image size
        res.collection.forEach(function(track,index){
            if (track.artwork_url != null)
                track.artwork_url = track.artwork_url.replace("-large","-t300x300");
        });

        return res.collection;
    }

}
