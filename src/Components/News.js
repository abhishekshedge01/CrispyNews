import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    // arcticles = [
    //     {
    //         "source": {
    //             "id": "google-news-in",
    //             "name": "Google News (India)"
    //         },
    //         "author": null,
    //         "title": "Covid Positivity Rate Drops From 19.5% To 15.8%; 2.51 Lakh New Cases",
    //         "description": "Daily Covid infections in India dropped by 12 per cent as the country reported 2.51 lakh new cases today. The positivity rate is down from 19.59% to 15.88% while the weekly positivity rate was recorded at 17.47 per cent.",
    //         "url": "https://www.ndtv.com/india-news/coronavirus-indias-covid-positivity-rate-drops-from-19-5-to-15-8-2-51-lakh-new-cases-12-less-than-yesterday-2734201",
    //         "urlToImage": "https://c.ndtvimg.com/2022-01/506bvl38_coronavirus-testing-india-afp_650x400_28_January_22.jpg",
    //         "publishedAt": "2022-01-28T05:34:00+00:00",
    //         "content": "<li>The active now comprises 5.18 per cent of the total infections, while the national COVID-19 recovery rate has decreased to 93.60 per cent. 400 districts have logged over 10 per cent positivity ra… [+2608 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techcrunch",
    //             "name": "TechCrunch"
    //         },
    //         "author": "Manish Singh",
    //         "title": "Google to invest up to $1 billion in Indian telecom operator Airtel",
    //         "description": "Google will invest $700 million in Indian telecom operator Airtel, the latest in a series of bets the company has made in the world’s second largest internet market as part of a $10 billion commitment to the country. Google said it will invest $700 million to…",
    //         "url": "https://techcrunch.com/2022/01/27/google-airtel-india/",
    //         "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-631026204.jpg?w=602",
    //         "publishedAt": "2022-01-28T05:14:08Z",
    //         "content": "Google will invest $700 million in Indian telecom operator Airtel, the latest in a series of bets the company has made in the world’s second largest internet market as part of a $10 billion commitmen… [+1793 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Family who died in freezing cold by US-Canada border identified",
    //         "description": "The four Indian nationals were trying to cross the Canada-US border on foot.",
    //         "url": "http://www.bbc.co.uk/news/world-us-canada-60162500",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15971/production/_123033488_patels.jpg",
    //         "publishedAt": "2022-01-28T04:37:19.9460493Z",
    //         "content": "By Holly HonderichBBC News, Washington\r\nImage source, BBC Gujarati\r\nImage caption, The family may have walked for 11 hours in freezing cold\r\nCanadian authorities believe the deaths of four Indian nat… [+3917 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techcrunch",
    //             "name": "TechCrunch"
    //         },
    //         "author": "Manish Singh",
    //         "title": "India's Moglix valued at $2.5 billion in new funding",
    //         "description": "Moglix has more than doubled its valuation to about $2.5 billion in just eight months as the Indian industrial business-to-business marketplace aggressively scales its offering in many parts of the world. Alpha Wave Global (formerly known as Falcon Edge Capit…",
    //         "url": "https://techcrunch.com/2022/01/27/moglix-series-f/",
    //         "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1021098870.jpg?w=600",
    //         "publishedAt": "2022-01-28T02:05:17Z",
    //         "content": "Moglix has more than doubled its valuation to about $2.5 billion in just eight months as the Indian industrial business-to-business marketplace aggressively scales its offering in many parts of the w… [+1473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-in",
    //             "name": "Google News (India)"
    //         },
    //         "author": "Krishn Kaushik",
    //         "title": "China hands over Arunachal teen: ‘Hearing mother’s voice, he began to cry’",
    //         "description": " The entire family had been holding its breath waiting for Miram's return, the 49-year-old Opang told The Indian Express, adding that the authorities would monitor Miram's health and check his Covid status before handing him over.",
    //         "url": "https://indianexpress.com/article/india/china-hands-over-arunachal-teen-7744913/",
    //         "urlToImage": "https://images.indianexpress.com/2022/01/AP-kidnapping-1-1-1-1.jpg",
    //         "publishedAt": "2022-01-28T01:53:34+00:00",
    //         "content": "On Thursday, the family went to the Indian Army camp at Tuting, near their ancestral Zido village, with the authorities hoping to put them in touch with Miram over video-conference. However, bad netw… [+3057 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-ca",
    //             "name": "Google News (Canada)"
    //         },
    //         "author": null,
    //         "title": "Bodies found frozen near Canada-U.S. border confirmed to be family from India | CBC News",
    //         "description": "Four people found frozen in a Manitoba field near the Canada-U.S. border last week have been officially identified as a family of four from India.",
    //         "url": "https://www.cbc.ca/news/canada/manitoba/border-crossing-bodies-found-frozen-family-identified-1.6329959",
    //         "urlToImage": "https://i.cbc.ca/1.6330101.1643313821!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/mba-border-deaths-20220127.jpg",
    //         "publishedAt": "2022-01-27T23:29:55+00:00",
    //         "content": "Four people found frozen in a Manitoba field near the Canada-U.S. border last week have been officially identified as a family from India.\r\nThe bodies of husband and wife Jagdish Baldevbhai Patel, 39… [+6633 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-in",
    //             "name": "Google News (India)"
    //         },
    //         "author": "Faryal Rumi",
    //         "title": "Railway exam violence: Six tutors among 22 booked",
    //         "description": "India News: An FIR was lodged on Wednesday against six teachers of different private coaching centres in the city, including YouTuber ‘Khan Sir’, and 16 others in",
    //         "url": "https://timesofindia.indiatimes.com/india/railway-exam-violence-six-tutors-among-22-booked/articleshow/89166368.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-89166360,width-1070,height-580,imgsize-90438,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2022-01-27T19:46:00+00:00",
    //         "content": "Explained: Why railway job aspirants are angryThe candidates, who went on a rampage in Bihar's Gaya, are opposing the railways' decision to hold the exam in two stages, claiming the second stage for … [+141 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cbc-news",
    //             "name": "CBC News"
    //         },
    //         "author": "CBC News",
    //         "title": "Identities of bodies found near U.S.-Canada border confirmed: High Commission of India | CBC News",
    //         "description": "Four bodies found frozen in a Manitoba field near the Canada-U.S. border last week have been officially identified as a group of Indian nationals, the High Commission of India in Ottawa says.",
    //         "url": "http://www.cbc.ca/news/canada/manitoba/border-crossing-bodies-found-frozen-family-identified-1.6329959",
    //         "urlToImage": "https://i.cbc.ca/1.6322237.1642823772!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/border-crossers-faced-endless-fields.jpg",
    //         "publishedAt": "2022-01-27T19:07:20.3408249Z",
    //         "content": "Four bodies found frozen in a Manitoba field near the Canada-U.S. border last week have been officially identified as a group of Indian nationals, the High Commission of India in Ottawa says.\r\nWhile … [+487 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "nbc-news",
    //             "name": "NBC News"
    //         },
    //         "author": "Sakshi Venkatraman",
    //         "title": "‘Writing With Fire’ tells the story of India’s only female-run newspaper",
    //         "description": "When it comes to presenting Indians to the world, the nuances of everyday life can often get lost in translation.",
    //         "url": "https://www.nbcnews.com/news/asian-america/writing-fire-tells-story-indias-only-female-run-newspaper-rcna13297",
    //         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-01/220124-writing-with-fire-se-1040a-bb8bb1.jpg",
    //         "publishedAt": "2022-01-27T16:28:22Z",
    //         "content": "When it comes to presenting Indians to the world, the nuances of everyday life can often get lost in translation. And when the story is told through the eyes of Dalit women, oppressed by a confluence… [+5390 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn",
    //             "name": "ESPN"
    //         },
    //         "author": null,
    //         "title": "Chicago Bears to hire Indianapolis Colts DC Matt Eberflus as head coach, sources say",
    //         "description": "The Bears will hire Colts defensive coordinator Matt Eberflus as their head coach, sources told ESPN's Adam Schefter.",
    //         "url": "http://espn.go.com/nfl/story/_/id/33159184/chicago-bears-hire-indianapolis-colts-dc-matt-eberflus-head-coach-sources-say",
    //         "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0114%2Fr802099_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-01-27T15:59:00Z",
    //         "content": "The Chicago Bears will hire Indianapolis Colts defensive coordinator Matt Eberflus as their head coach, sources told ESPN's Adam Schefter.\r\nEberflus, 51, also was considered a candidate for the Jacks… [+2072 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": "Andy Bailey",
    //         "title": "Surprise Trade Deadline Targets for NBA's Top Contenders",
    //         "description": "As we approach the  NBA 's February 10 trade deadline, names like Ben Simmons, Jerami Grant and a handful of Indiana Pacers are understandably generating the most headlines. But seemingly every year, the league has a way of surprising us...",
    //         "url": "https://bleacherreport.com/articles/2952647-surprise-trade-deadline-targets-for-nbas-top-contenders",
    //         "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/498/633/da0a580f4b63f50a483ddde96b089529_crop_exact.jpg?w=1200&h=1200&q=75",
    //         "publishedAt": "2022-01-27T12:00:05Z",
    //         "content": "Adam Glanzman/Getty Images\r\nThe distance between the Utah Jazz's league-high 117.3 points per 100 possessions and the second-place Atlanta Hawks is about the same as the gulf between the Hawks and th… [+2222 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-in",
    //             "name": "Google News (India)"
    //         },
    //         "author": "Reuters",
    //         "title": "India seen boosting budget spending on infrastructure",
    //         "description": "Past governments have used the budget to announce big-ticket economic reforms, but economists said major steps look unlikely next week, because of political pressures. Prime Minister Narendra Modi was recently forced to scale back efforts to deregulate agricu…",
    //         "url": "https://economictimes.indiatimes.com/news/economy/policy/india-seen-boosting-budget-spending-on-infrastructure/articleshow/89147467.cms",
    //         "urlToImage": "https://img.etimg.com/thumb/msid-89147580,width-1070,height-580,imgsize-215537,overlay-economictimes/photo.jpg",
    //         "publishedAt": "2022-01-27T04:07:00+00:00",
    //         "content": "India plans to raise spending on infrastructure in its annual budget next week to set the economy on a firmer footing, but fiscal constraints leave little chance of concessions for households hurting… [+3877 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hindu",
    //             "name": "The Hindu"
    //         },
    //         "author": "Ananth Krishnan",
    //         "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
    //         "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
    //         "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
    //         "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
    //         "publishedAt": "2021-07-22T15:47:01Z",
    //         "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "rte",
    //             "name": "RTE"
    //         },
    //         "author": "RTÉ News",
    //         "title": "UK continues with reopening plan despite concerns",
    //         "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
    //         "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
    //         "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
    //         "publishedAt": "2021-05-15T09:33:48Z",
    //         "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Rajat Pandit",
    //         "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
    //         "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
    //         "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T08:29:00Z",
    //         "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Times Of India",
    //         "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
    //         "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
    //         "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T05:44:49Z",
    //         "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "PTI",
    //         "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
    //         "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
    //         "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T05:43:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Bloomberg",
    //         "title": "Even record death toll may hide extent of India’s Covid crisis",
    //         "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
    //         "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T04:41:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Dipak K Dash",
    //         "title": "Government to provide 5 kg free food grains to poor for May & June",
    //         "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
    //         "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T04:23:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "TIMESOFINDIA.COM",
    //         "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
    //         "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
    //         "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T03:54:00Z",
    //         "content": null
    //     }
    // ]

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: "sports"
    }


    static propTypes =
        {
            country: PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string
        }

    capitailse = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            colorx: "success"
        }
    }


    async componentDidMount() {
        this.setState({ loading: true })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2171a4c56d1e4d009902f28e7f7a70c3&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log("mount");
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        if (this.props.category === "sports") {
            this.setState({ colorx: "warning" });
        }
        else if (this.props.category === "health") {
            this.setState({ colorx: "danger" });
        }
        else if (this.props.category === "entertainment") {
            this.setState({ colorx: "light" });
        }
        else if (this.props.category === "science") {
            this.setState({ colorx: "dark" });
        }
        else if (this.props.category === "busniess") {
            this.setState({ colorx: "secondary" });
        }
        else if (this.props.category === "technology") {
            this.setState({ colorx: "primary" });
        }
        else if (this.props.category === "general") {
            this.setState({ colorx: "primary" });
        }
    }

    handlenext = async () => {

        if (this.state.page < Math.ceil(this.state.totalResults / 10)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2171a4c56d1e4d009902f28e7f7a70c3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        }
    }

    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2171a4c56d1e4d009902f28e7f7a70c3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }


    render() {
        console.log("render")
        return (
            <div className='abc' style={{ fontFamily: "font-family: 'Nunito', sans-serif" }}>
                <div className='container my-3' >
                    <h1 className='text-center' style={{ margin: "30px 0px" }}><b>Top Headlines from {this.capitailse(this.props.category)}</b></h1>
                    {this.state.loading && <Spinner />}
                    <div className='row'>
                        {!this.state.loading && this.state.articles?.map((ele) => {
                            return <div className='col-md-4' key={ele?.url}>
                                <NewsItem colorx={this.state.colorx} className="modern" source={ele.source?.name ?? ""} publishedAt={ele.publishedAt} author={ele.author ? ele.author : "unknown"} title={ele ? ele.title : ""} description={ele ? ele.description : ""} imgurl={ele ? ele.urlToImage : ""} readurl={ele ? ele.url : ""} />
                            </div>
                        })}
                    </div>
                    <div className="d-flex justify-content-between" style={{ marginTop: "50px" }}>
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / 10)} className="btn btn-dark" onClick={this.handlenext}>Next &rarr; </button>
                    </div>
                </div>
            </div>
        )
    }
}
