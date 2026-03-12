const products = [
    {
        id: 1,
        title: "Small Prawn",
        weight: "1kg",
        price: 100,
        size: "small",
        featured: true,
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 2,
        title: "Small Prawn",
        weight: "2kg",
        price: 200,
        featured: false,
        size: "small",
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 3,
        title: "Small Prawn",
        weight: "3kg",
        price: 300,
        featured: false,
        size: "small",
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 4,
        title: "Small Prawn",
        weight: "4kg",
        price: 400,
        featured: false,
        size: "small",
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 5,
        title: "Small Prawn",
        weight: "5kg",
        price: 500,
        featured: true,
        size: "small",
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 6,
        title: "Small Prawn",
        weight: "10kg",
        price: 1000,
        featured: false,
        size: "small",
        images: ["https://derafarms.com/cdn/shop/files/deraproducts-2024-06-27T113546.629.png?v=1719468381",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG11i420p1oNqSXeDTDEAdoe2QBonm_pVWg&s",
            "https://elfabshop.com/cdn/shop/files/7256.png?v=1723270423",
            "https://www.chennaimeats.com/images/buy-fresh-white-prawn-small-deveined-online.jpg"
        ]
    },
    {
        id: 7,
        title: "Medium Prawn",
        weight: "1kg",
        price: 100,
        featured: true,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 8,
        title: "Medium Prawn",
        weight: "2kg",
        price: 200,
        featured: false,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 9,
        title: "Medium Prawn",
        weight: "3kg",
        price: 300,
        featured: false,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 10,
        title: "Medium Prawn",
        weight: "4kg",
        price: 400,
        featured: false,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 11,
        title: "Medium Prawn",
        weight: "5kg",
        price: 500,
        featured: true,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 12,
        title: "Medium Prawn",
        weight: "10kg",
        price: 1000,
        featured: true,
        size: "medium",
        images: ["https://media.istockphoto.com/id/1071470788/photo/raw-fresh-pacific-white-shrimp.jpg?s=612x612&w=0&k=20&c=hWJ6TJZR0ZPPsCdGxkIpma9fMlw8Ttes16AWKx7YpPw=",
            "https://m.media-amazon.com/images/I/71p9oFN9vHL._AC_UF350,350_QL80_.jpg",
            "https://m.media-amazon.com/images/I/715IV9oun1L._SX679_.jpg",
            "https://www.jackhookseafood.co.uk/cdn/shop/products/shutterstock_352880732-2_800x.jpg?v=1600896830"
        ]
    },
    {
        id: 13,
        title: "Large Prawn",
        weight: "1kg",
        price: 100,
        featured: true,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },
    {
        id: 14,
        title: "Large Prawn",
        weight: "2kg",
        price: 200,
        featured: false,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },
    {
        id: 15,
        title: "Large Prawn",
        weight: "3kg",
        price: 300,
        featured: false,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },
    {
        id: 16,
        title: "Large Prawn",
        weight: "4kg",
        price: 400,
        featured: false,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },
    {
        id: 17,
        title: "Large Prawn",
        weight: "5kg",
        price: 500,
        featured: true,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },
    {
        id: 18,
        title: "Large Prawn",
        weight: "10kg",
        price: 1000,
        featured: true,
        size: "large",
        images: ["https://www.shutterstock.com/image-photo/farm-fresh-medium-prawns-square-260nw-2531513903.jpg",
            "https://wholesomeseafood.pk/wp-content/uploads/2025/06/Buy-Fresh-Large-Prawns-Online-in-Pakistan-Cash-on-Delivery.webp",
            "https://thecornishfishmonger.co.uk/cdn/shop/files/King_Prawns_Enormous.jpg?crop=center&height=1200&v=1741011148&width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWpQh8-a3C8DWiKhLyn93Utu0Y0Fxm9QtNTCNKx1weA&s"
        ]
    },

]

export default products;
