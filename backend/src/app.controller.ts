import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('personas')
  getPersons(): any {
    return [{
      nombre: 'Alvaro',
      edad: 25
    },
    {
      nombre: 'Lucia',
      edad: 34
    },
    {
      nombre: 'Jorge',
      edad: 64
    },
    {
      nombre: 'Amanda',
      edad: 28
    }];
  }

  @Get('sources')
  getSources(): any {
    return {
      "data": {
        "status": "ok",
        "sources": [
          {
            "id": "abc-news",
            "name": "ABC News",
            "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
            "url": "https://abcnews.go.com",
            "category": "general",
            "language": "en",
            "country": "us"
          },
          {
            "id": "abc-news-au",
            "name": "ABC News (AU)",
            "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
            "url": "http://www.abc.net.au/news",
            "category": "general",
            "language": "en",
            "country": "au"
          },
          {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English",
            "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
            "url": "http://www.aljazeera.com",
            "category": "general",
            "language": "en",
            "country": "us"
          },
          {
            "id": "ars-technica",
            "name": "Ars Technica",
            "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
            "url": "http://arstechnica.com",
            "category": "technology",
            "language": "en",
            "country": "us"
          },
          {
            "id": "associated-press",
            "name": "Associated Press",
            "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
            "url": "https://apnews.com/",
            "category": "general",
            "language": "en",
            "country": "us"
          },
          {
            "id": "vice-news",
            "name": "Vice News",
            "description": "Vice News is Vice Media, Inc.'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of \"under - reported stories\".",
            "url": "https://news.vice.com",
            "category": "general",
            "language": "en",
            "country": "us"
          },
          {
            "id": "wired",
            "name": "Wired",
            "description": "Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.",
            "url": "https://www.wired.com",
            "category": "technology",
            "language": "en",
            "country": "us"
          }
        ]
      },
      "status": 200,
      "statusText": "OK",
      "headers": {
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        "expires": "-1",
        "pragma": "no-cache"
      },
      "config": {
        "url": "https://newsapi.org/v2/sources?language=en&apiKey=9ea1ab728d064e058f5615edc94bf515",
        "method": "get",
        "headers": {
          "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
          null
        ],
        "transformResponse": [
          null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1
      },
      "request": {}
    }
  }
  
  @Get('news')
  getNews(): any {
    return {
      "status": "ok",
      "totalResults": 10,
      "articles": [
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "El aaaaaaaaaaaaaaaaaaaaPaso Walmart gunman who killed 23 pleads guilty to hate crimes",
          "description": "The attacker showed little emotion as he pleaded guilty to one of the deadliest US mass shootings.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64577753",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AC55/production/_128571144_gettyimages-1160456498.jpg",
          "publishedAt": "2023-02-09T01:37:19.7896209Z",
          "content": "A gunman who killed 23 people at a Walmart in Texas four years ago after posting an online rant about a \"Hispanic invasion\" has pleaded guilty.\r\nPatrick Crusius, 24, admitted 90 federal counts, inclu… [+1438 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Ukraine war: Zelensky asks France and Germany for fighter jets",
          "description": "After convincing the West to supply tanks, Ukraine's president is now on a mission to get aircraft.",
          "url": "http://www.bbc.co.uk/news/world-europe-64577375",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BFDD/production/_128571194_9e53d8f4d72ce33628645d2a74415bbdf52ec5ad0_40_4329_24341000x563.jpg",
          "publishedAt": "2023-02-09T01:22:20.7285069Z",
          "content": "Ukraine's leader has taken his request for fighter jets to France and Germany after meeting UK officials.\r\nPresident Volodymyr Zelensky met the two countries' leaders in Paris on Wednesday evening, w… [+2356 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Twitter outage sees users told they are over daily tweet limit",
          "description": "Some users reported being notified they were over the tweet-per-day limit, even if they had not posted.",
          "url": "http://www.bbc.co.uk/news/technology-64577731",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/75A5/production/_128571103_gettyimages-1241769577.jpg",
          "publishedAt": "2023-02-09T00:52:28.4776346Z",
          "content": "Some Twitter users were unable to tweet on Wednesday after the website experienced technical problems.\r\nAccount holders received a message saying: \"You are over the daily limit for sending Tweets.\" \r… [+1492 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Rihanna: Super Bowl half-time show to mark singer's live return",
          "description": "The singer will headline one of the most prestigious gigs in music at Sunday's Super Bowl in Arizona.",
          "url": "http://www.bbc.co.uk/news/entertainment-arts-64545100",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/23A5/production/_128552190_cropgettyimages-1375063381.jpg",
          "publishedAt": "2023-02-09T00:52:22.946207Z",
          "content": "Rihanna fans are eagerly anticipating her performance at the Super Bowl half-time show - one of the biggest and most prestigious gigs in music.\r\nThe singer will perform during the break when the Phil… [+5457 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Indigenous sports wow crowds at Arctic Winter Games",
          "description": "Alaskan high kick, stick pull and kneel jump were among the competitive games in Canada this year.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64517131",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7D75/production/_128571123_p0f1z2ft.jpg",
          "publishedAt": "2023-02-09T00:22:20.9152358Z",
          "content": "The 2023 Arctic Winter Games in Alberta, Canada, have just come to a close, bringing together thousands of athletes, coaches and volunteers from northern Canada, Alaska, Greenland and Scandinavia. \r\n… [+248 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Google's AI bot mistake wipes $100bn off shares",
          "description": "Google has been under pressure since rival Microsoft unveiled its artificial intelligence tech ChatGPT.",
          "url": "http://www.bbc.co.uk/news/business-64576225",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/56BF/production/_128570222_whatsubject.jpg",
          "publishedAt": "2023-02-08T23:22:23.6959887Z",
          "content": "Google is searching for ways to reassure people that it is still out in front in the race for the best artificial intelligence technology.\r\nAnd so far, the internet giant seems to be coming up with t… [+1928 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Turkey quake: President Erdogan accepts some problems with response",
          "description": "Recep Tayyip Erdogan defends the government's response as Syria struggles to get much needed aid.",
          "url": "http://www.bbc.co.uk/news/world-europe-64577371",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9733/production/_128570783_7e8cc1cad6d93b9320edcffec9c951f19af0db8a0_245_6000_33751000x563.jpg",
          "publishedAt": "2023-02-08T23:22:19.9781635Z",
          "content": "Turkey's president Recep Tayyip Erdogan has defended his government's response to two catastrophic earthquakes, saying it was impossible to prepare for the scale of the disaster.\r\nAt least 12,000 peo… [+2099 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Chinese balloon part of worldwide programme, US officials say",
          "description": "US officials say the object is part of a wider fleet of balloons that has spanned five continents.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64572324",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/795A/production/_128566013_mediaitem128566011.jpg",
          "publishedAt": "2023-02-08T22:07:22.0713607Z",
          "content": "The US believes a suspected Chinese surveillance balloon that was shot down over its territory is part of a wider fleet that has spanned five continents.\r\n\"The United States was not the only target o… [+2280 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "The clues in the State of the Union that suggest Joe Biden will run for president in 2024",
          "description": "His address carried hints at what a re-election bid may look like, our North America editor says.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64567508",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AD62/production/_128568344_f29aaad137b57920b318df80e738fefcd1b61d36.jpg",
          "publishedAt": "2023-02-08T20:22:18.338337Z",
          "content": "President Joe Biden will probably announce in the next couple of months that he will run for a second presidential term in 2024. Were there clues in his State of the Union speech about his re-electio… [+4338 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Two children dead after bus crashes into Quebec daycare centre",
          "description": "The 51-year-old bus driver has been arrested and charged with homicide, police say.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-64575646",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/170B2/production/_128568349_gettyimages-1246892141.jpg",
          "publishedAt": "2023-02-08T18:22:21.0398604Z",
          "content": "Two children are dead and six others are injured after a city bus rammed into a daycare centre in Laval, Quebec, police say.\r\nThe 51-year-old bus driver, who was an employee of the local public trans… [+786 chars]"
        }
      ]
    };
  }
}
