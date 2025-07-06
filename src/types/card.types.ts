export type CardItem = {
  icon: string;
  title: string;
  subtitle: string;
};
export type CardStyleType = 'card1' | 'card2' | 'card3';

export interface CardProps {
  title: string;
  text: string;
  image?: string;
  cardClass?: CardStyleType;
}
export interface CardListProps {
  limit?: number;
}