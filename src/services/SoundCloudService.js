import SC from 'soundcloud';

export default class ScService {

    static async getFavorites() {
        var userId = 63317612;

        // Initialize SoundCloud Client
        SC.initialize({
            client_id: 'aa43f640526cb3f753a3a2ce40a340b4ç',
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
