import { gql, request } from 'graphql-request';

// Define the GraphQL endpoint URL
const graphUrl = 'https://ap-south-1.cdn.hygraph.com/content/cm51xvgcj00iw07w37lkvmx9h/master';
console.log("This is URL:", graphUrl);

// The GraphQL query to fetch category data
const getCategory = async () => {
    const document = gql`
        query {
            categories {
                id
                name
                icons(first: 40) {
                    id
                    url(transformation: {})
                }
            }
        }
    `;

    try {
        // Make the request to the GraphQL endpoint and wait for the response
        const result = await request(graphUrl, document);
        return result;
    } catch (error) {
        // Handle errors if the request fails
        console.error('Error fetching categories:', error);
        throw error; // Rethrow the error if you want it to propagate
    }
};

export default getCategory;
