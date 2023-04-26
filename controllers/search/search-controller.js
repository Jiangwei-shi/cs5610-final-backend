import yelp from 'yelp-fusion';

const searchYelp = async (req, res) => {
    const { keyword } = req.query;
    

    const apiKey = 'prLDauauxY3xQ7O-tzuE3hhT50vgWPmU14vDS9UO9ql3CNEKme_18DRi4qGw-cxFNBXh5Ad5QUYYv_lz2fs5VngjhkJMlplSB9_ZehHxFRaKJNWxnXqrdpFDEUBEZHYx';
    const client = yelp.client(apiKey);
    
    try {
        const searchResponse = await client.search({
            term: keyword,
            location: 'Boston, MA'
        });

        res.json(searchResponse.jsonBody.businesses);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error searching for tuits');
    }
};

export default (app) => {
    app.get("/api/tuits/search", searchYelp);
};