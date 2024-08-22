import { LoaderFunction } from "@remix-run/node";

export const query = `
{
    products(first: 2){
        edges{
            node{
                id
                handle
                title
                description
            }
        }
        pageInfo {
            hasNextPage
        }
    }
}
`

export const loader: LoaderFunction = async ({ request }) => {

    try {

    } catch (error) {
        console.log(error)
    }

}

const Products = () => {
    return (
        <div>this is a prodcuts Page</div>
    )
}

export default Products;