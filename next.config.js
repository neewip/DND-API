/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {

        domains: [

            "https://jsonplaceholder.typicode.com/photos",

            "https://via.placeholder.com",

        ],

        remotePatterns: [

            {

                protocol: "https",

                hostname: "via.placeholder.com",
                hostname: "raw.githubusercontent.com",
                hostname: "dnd5eapi.co",

                port: "",

                pathname: "/**",

            }
        ]

    }


}

module.exports = nextConfig