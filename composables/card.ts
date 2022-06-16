import {
  BENEFIT_1_CONTENT,
  BENEFIT_1_TITLE,
  BENEFIT_2_CONTENT,
  BENEFIT_2_TITLE,
  BENEFIT_3_CONTENT,
  BENEFIT_3_TITLE,
} from "~/utilities/constant";
export const useCard = () => {
  const cardData = [
    {
      id: 1,
      title: BENEFIT_1_TITLE,
      content: BENEFIT_1_CONTENT,
    },
    {
      id: 2,
      title: BENEFIT_2_TITLE,
      content: BENEFIT_2_CONTENT,
    },
    {
      id: 3,
      title: BENEFIT_3_TITLE,
      content: BENEFIT_3_CONTENT,
    },
  ];
  return {
    cardData,
  };
};
