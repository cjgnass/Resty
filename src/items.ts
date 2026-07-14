export type ItemTag = "BREAKFAST" | "LUNCH" | "DINNER";

export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: ItemTag[];
  stripeId: string;
}

export const items: Item[] = [
  {
    name: "Crepes",
    description: "Crepes Description",
    price: 6.99,
    image: "crepes.webp",
    tags: ["BREAKFAST"],
    stripeId: "price_1TtFGhGxknssnJ8016h4bSsw",
  },
  {
    name: "Quesadillas",
    description: "Quesadillas Description",
    price: 7.99,
    image: "quesadillas.webp",
    tags: ["LUNCH"],
    stripeId: "price_1TtFHWGxknssnJ80jPWr9OuE",
  },
  {
    name: "Spaghetti",
    description: "Spaghetti Description",
    price: 12.99,
    image: "spaghetti-meat-sauce.webp",
    tags: ["DINNER"],
    stripeId: "price_1TtFIGGxknssnJ8058FT4UFV",
  },
  {
    name: "Rice Bowl",
    description: "Rice Bowl Description",
    price: 9.99,
    image: "salmon-rice.webp",
    tags: ["LUNCH"],
    stripeId: "price_1TtFJ2GxknssnJ805FP5t59z",
  },
  {
    name: "Fettuccine",
    description: "Fettuccine Description",
    price: 11.99,
    image: "fettuccine.webp",
    tags: ["DINNER"],
    stripeId: "price_1TtFJwGxknssnJ80jUgMQF8s",
  },
];
