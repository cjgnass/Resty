export type ItemTag = "BREAKFAST" | "LUNCH" | "DINNER";

export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: ItemTag[];
}

export const items: Item[] = [
  {
    name: "Crepes",
    description: "Crepes Description",
    price: 5,
    image: "crepes.webp",
    tags: ["BREAKFAST"],
  },
  {
    name: "Quesadillas",
    description: "Quesadillas Description",
    price: 5,
    image: "quesadillas.webp",
    tags: ["LUNCH"],
  },
  {
    name: "Spaghetti",
    description: "Spaghetti Description",
    price: 5,
    image: "spaghetti-meat-sauce.webp",
    tags: ["DINNER"],
  },
  {
    name: "Rice Bowl",
    description: "Rice Bowl Description",
    price: 5,
    image: "salmon-rice.webp",
    tags: ["LUNCH"],
  },
  {
    name: "Fettuccine",
    description: "Fettuccine Description",
    price: 5,
    image: "fettuccine.webp",
    tags: ["DINNER"],
  },
];
