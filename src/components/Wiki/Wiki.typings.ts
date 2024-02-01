import { StaticImageData } from "next/image";

export interface CategoryArr {
  id: number;
  title: string;
  icon: StaticImageData;
}

export interface WikiArr {
  categoryId: number;
  categoryTitle: string;
  categoryArr: CategoryArr[];
}
