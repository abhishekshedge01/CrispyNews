import React, { Component } from 'react'

export default class NewsItem extends Component {

    publish=(given)=>
    {
        let today=new Date().getDate();
        let publish_date=new Date(given).getDate();
        if(today-publish_date===0)
        {
            return "Today";
        }
        else if(today-publish_date===1)
        {
            return "Yesterday";
        }
        else
        {
            return `${today-publish_date} days ago`
        }
    }

    render() {
       
        let { title, description, imgurl, readurl, author, publishedAt,source,colorx } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem", boxShadow: "rgb(0 0 0 / 8%) 0px 3px 12px" }}>
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-${colorx}`} style={{right: "-20px", zIndex:"1",padding: "5px 8px"}}>{source}</span>
                    <img src={imgurl ? imgurl : "https://b.zmtcdn.com/data/pictures/chains/6/12006/dc738684081022563dfdeb939408177b_o2_featured_v2.jpg"} style={{ borderTopLeftRadius: "0.25em", borderTopRightRadius: "0.25em" }} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p style={{ fontSize: '13px' }} className="card-text">{description}</p>
                        <div className='ravi' style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <p className='card-text'><small className="text-muted">by <b>{author}</b></small></p>
                        <p><small><b>{this.publish(publishedAt)}</b></small></p>
                        </div>
                        <a href={readurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
