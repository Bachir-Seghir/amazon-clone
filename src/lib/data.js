export const data = [
  // stage 1
  {
    // section -- stage 2
    id: "data2",
    title: "Programs & Features",
    categories: [
      // main-categories -- stage 3
      {
        title: "Gift cards",
        id: "data2-a",
        subCategories: {
          relationshipId: "data2-a",
          items: [
            {
              relationshipId: "data2-a",
              id: "data2-a1",
              title: "All gift cards",
              pathname: "/categories/computers/Computers_Tablets",
            },
            {
              relationshipId: "data2-a",
              id: "data2-a2",
              title: "Gift cards by mail",
              pathname: "/categories/computers/Laptops",
            },
            {
              relationshipId: "data2-a",
              id: "data2-a3",
              title: "Amazon Cash",
              pathname: "/categories/computers/Printers",
            },
          ],
        },
      },
    ],
  },
  {
    // section  -- stage 2
    id: "data1",
    title: "Shop By Departement",
    categories: [
      // main-categories -- stage 3
      {
        title: "Computers",
        id: "data1-a",
        subCategories: {
          relationshipId: "data1-a",
          items: [
            // sub-categories -- stage 4
            {
              id: "data1-a-a1",
              title: "Computers & Tablets",
              pathname: "/categories/computers/Computers_Tablets",
            },
            {
              id: "data1-a-a2",
              title: "Laptops",
              pathname: "/categories/computers/Laptops",
            },
            {
              id: "data1-a-a3",
              title: "Printers",
              pathname: "/categories/computers/Printers",
            },
          ],
        },
      },
      {
        title: "Electronics",
        id: "data1-b",
        subCategories: {
          relationshipId: "data1-b",
          items: [
            {
              id: "data1-b-b1",
              title: "Cell Phones & Accessories",
              pathname: "/categories/Electronics/Cell_Phones_Accessories",
            },
            {
              id: "data1-b-b2",
              title: "GPS & Navigation",
              pathname: "/categories/Electronics/GPS_Navigation",
            },
            {
              id: "data1-b-b3",
              title: "Television & Video",
              pathname: "/categories/Electronics/Television_Video",
            },
          ],
        },
      },
      {
        title: "Arts & Crafts",
        id: "data1-c",
        subCategories: {
          relationshipId: "data1-c",
          items: [
            {
              id: "data1-c-c1",
              title: "painting, Drawing",
              pathname: "/categories/Arts_Crafts/painting_Drawing",
            },
            {
              id: "data1-c-c2",
              title: "Crafting",
              pathname: "/categories/Arts_Crafts/Crafting",
            },
            {
              id: "data1-c-c3",
              title: "Sewing",
              pathname: "/categories/Arts_Crafts/Sewing",
            },
          ],
        },
      },
    ],
  },
];
