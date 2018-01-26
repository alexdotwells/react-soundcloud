import SC from 'soundcloud';

export default class ScService {
    
    static async getFavorites() {
        var userId = 63317612;

        // Initialize SoundCloud Client
        SC.initialize({
            client_id: '##CLIENT_ID##',
            redirect_uri: 'http://localhost:3000/callback'
        });  

        // Get User Favorites from SC API
        const res = await SC.get(`/users/${userId}/favorites`,{
            limit: 20,
            linked_partitioning: 1        
        })

        return res.collection;
    }

}