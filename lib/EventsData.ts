export interface EventData {
  title: string;
  description?: string;
  thumbnail: any;
  video?: any;
  stage?: string;
  date?: any;
  upcoming?: boolean;
}

export const MusicEvent: EventData[] = [
  {
    title: "Radwimps Asian Tour 2023",
    description: `Have you secured your ticket for the RADWIMPS Asian Tour 2023 in Jakarta? For those who have not, but still in the hope to watch them live in action in Jakarta, please kindly let us know by clicking this button and filling this form below.`,
    thumbnail: `https://assets.loket.com/imgdir/2023-04-05/90/90843702624929eeff424d031418b5767ea47bca1823598860219276723_progressive.png`,
    video: "",
    stage: "Basket Hall Senayan GBK",
    date: "30 July 2023",
    upcoming: true,
  },
  {
    title: "Westlife The Wild Dreams Tour",
    description: `The Wild Dreams Tour will see Westlife get closer to their fans than ever before, as they belt out all of their greatest hits 'Swear It Again', 'Flying Without Wings' and 'World of our Own' as well as fresh pop anthems from their new album 'Wild Dreams'. `,
    thumbnail: `https://loket-asset-production.s3.ap-southeast-1.amazonaws.com/lp/sdk/prod/uploads/10/Westlife%20NEW%20Website%20Banner%20Large.jpeg`,
    video: "",
    stage: "Stadion Madya GBK",
    date: "11 February 2023",
    upcoming: false,
  },
];

export default MusicEvent;
