export const color = [
  "white",
  "black",
  "Red",
  "Maroon",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "Red", label: "Red" },
      { value: "Maroon", label: "Maroon" },
      { value: "Being", label: "Being" },
      { value: "Pink", label: "Pink" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "159 to 399" },
      { value: "399-999", label: "399 to 999" },
      { value: "999-1999", label: "999 to 1999" },
      { value: "1999-2999", label: "1999 to 2999" },
      { value: "3999-4999", label: "3999 to 4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% & above" },
      { value: "20", label: "20% & above" },
      { value: "30", label: "30% & above" },
      { value: "40", label: "40% & above" },
      { value: "50", label: "50% & above" },
      { value: "60", label: "60% & above" },
      { value: "70", label: "70% & above" },
      { value: "80", label: "80% & above" },
    ],
  },
  {
    id: "stock",
    name: "Stock",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
