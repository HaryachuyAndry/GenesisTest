import {EpisodeType, ItemSerialType} from '../models/video';

export const listTrendingSerials: Array<ItemSerialType> = [
  {
    id: 's1',
    title: 'Bridgerton',
    genre: 'Romance',
    subtitle: 'Julia Quinn',
    url: 'https://bestsimilar.com/img/movie/thumb/53/69101.jpg',
    available: '2024-3-7',
  },
  {
    id: 's2',
    title: 'American Heiress',
    genre: 'Romance',
    subtitle: 'Daisy Goodwin',
    url: 'https://m.media-amazon.com/images/I/818HF8hhorL._AC_UF1000,1000_QL80_.jpg',
    available: '2024-5-5',
  },
  {
    id: 's3',
    title: 'One day',
    genre: 'Romance',
    subtitle: 'David Nicholls',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_brSB0a_PoHqWRsWI-yHx_JIlKwck1sFwVfrC7_BuXvrboNpHsfDaH35FQRjL0n_tWs&usqp=CAU',
    available: '2024-5-5',
  },
  {
    id: 's4',
    title: 'Love at first sight',
    genre: 'Romance',
    subtitle: 'Jennifer E. Smith',
    url: 'https://advanced-television.com/wp-content/uploads/2023/09/LoveFirst-netflix.jpg',
    available: '2024-5-14',
  },
];

export const listRomanceSerials: Array<ItemSerialType> = [
  {
    id: 's3',
    title: 'One day',
    genre: 'Romance',
    subtitle: 'David Nicholls',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_brSB0a_PoHqWRsWI-yHx_JIlKwck1sFwVfrC7_BuXvrboNpHsfDaH35FQRjL0n_tWs&usqp=CAU',
    available: '2024-3-5',
  },
  {
    id: 's1',
    title: 'Bridgerton',
    subtitle: 'Julia Quinn',
    genre: 'Romance',
    url: 'https://bestsimilar.com/img/movie/thumb/53/69101.jpg',
    available: '2024-5-7',
  },
  {
    id: 's4',
    title: 'Love at first sight',
    subtitle: 'Jennifer E. Smith',
    genre: 'Romance',
    url: 'https://advanced-television.com/wp-content/uploads/2023/09/LoveFirst-netflix.jpg',
    available: '2024-5-14',
  },
  {
    id: 's2',
    title: 'American Heiress',
    subtitle: 'Daisy Goodwin',
    genre: 'Romance',
    url: 'https://m.media-amazon.com/images/I/818HF8hhorL._AC_UF1000,1000_QL80_.jpg',
    available: '2024-5-5',
  },
];

export const listEpisodes: Array<EpisodeType> = [
  {
    title: 'Episode 1',
    id: 'e1',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
  },
  {
    title: 'Episode 2',
    id: 'e2',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
  },
  {
    title: 'Episode 3',
    id: 'e3',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
  },
  {
    title: 'Episode 4',
    id: 'e4',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
  },
  {
    title: 'Episode 5',
    id: 'e5',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
  },
  {
    title: 'Episode 6',
    id: 'e6',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
  },
  {
    title: 'Episode 7',
    id: 'e7',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
  },
  {
    title: 'Episode 8',
    id: 'e8',
    url: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
  },
];

export const listDataSerials = {
  ['s1']: {
    listEpisodes: listEpisodes,
  },
  ['s2']: {
    listEpisodes: listEpisodes,
  },
  ['s3']: {
    listEpisodes: listEpisodes,
  },
  ['s4']: {
    listEpisodes: listEpisodes,
  },
};
