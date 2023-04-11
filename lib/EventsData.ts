export interface EventData {
  title: string;
  description?: string;
  thumbnail: any;
  video?: any;
  stage?: string;
  date?: any;
  upcoming?: boolean;
  city?: string;
  slug?: string;
}

export interface Events {
  data: EventData[];
}

export const MusicEvent: EventData[] = [
  {
    title: "RADWIMPS Asian Tour 2023",
    description: `Have you secured your ticket for the RADWIMPS Asian Tour 2023 in Jakarta? For those who have not, but still in the hope to watch them live in action in Jakarta, please kindly let us know by clicking this button and filling this form below.`,
    thumbnail: `https://assets.loket.com/imgdir/2023-04-05/90/90843702624929eeff424d031418b5767ea47bca1823598860219276723_progressive.png`,
    video: "",
    stage: "Basket Hall Senayan GBK",
    date: "30 July 2023",
    upcoming: true,
    city: "Jakarta",
    slug: "radwimps-asian-tour-2023",
  },
  {
    title: "Westlife The Wild Dreams Tour",
    description: `The Wild Dreams Tour will see Westlife get closer to their fans than ever before, as they belt out all of their greatest hits 'Swear It Again', 'Flying Without Wings' and 'World of our Own' as well as fresh pop anthems from their new album 'Wild Dreams'. `,
    thumbnail: `https://loket-asset-production.s3.ap-southeast-1.amazonaws.com/lp/sdk/prod/uploads/10/Westlife%20NEW%20Website%20Banner%20Large.jpeg`,
    video: "",
    stage: "Stadion Madya GBK",
    date: "11 February 2023",
    upcoming: true,
    city: "Jakarta",
    slug: "westlife-the-wild-dreams-tour",
  },
  {
    title: "Keshi Hell/Heaven Tour 2022",
    description: `The long awaited HELL/HEAVEN Tour will be keshi's first tour in Asia, Australia and New Zealand. The tour kicked off in Europe in April 2022, and he is currently performing across North America where all shows are sold out within minutes during pre-sale, leading to additional tickets and larger venues.  `,
    thumbnail: `https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/2022-07-15/28/280f3f1a3bb0cd9e77c6dffebe62e1a7c9eb66551548118420880430624_progressive.jpg`,
    video: "",
    stage: "Basket Hall Senayan GBK",
    date: "28 - 29 November 2022",
    upcoming: false,
    city: "Jakarta",
    slug: "keshi-hell-heaven-tour",
  },
  {
    title: "Calum Scott Bridges Asia Tour 2022",
    description: `Calum Scott today announces his biggest headline Asia tour to date, the “BRIDGES” Asia Tour, including his debut shows in Tokyo and Bangkok. He will come back to Jakarta Indonesia on October 25, 2022 at Bengkel Space SCBD. `,
    thumbnail: `https://loket-asset-production.s3.ap-southeast-1.amazonaws.com/lp/sdk/prod/uploads/17/Calum%20Scott%20-%20Head%20banner.jpg`,
    video: "",
    stage: "Bengkel Space SCBD",
    date: "25 October 2022",
    upcoming: false,
    city: "Jakarta",
    slug: "calum-scott-bridges-asia-tour",
  },
];

export default MusicEvent;
