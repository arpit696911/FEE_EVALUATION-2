import React from 'react';

export default function Newsitem(props) {
  return (
    <div>
      <div className="card my-4" >
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {props.source.name}
  </span>
        <img 
          src={props.urltoimage} 
          className="card-img-top" 
          alt={props.title} 
        />
        <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black',color:props.mode==='light'?'black':'#e1ebe4' }}>
          <h5 className="card-title"><b>{props.title}</b></h5>
          <p className="card-text">{props.desc}</p>
          <footer className="blockquote-footer text-danger">By {props.author?props.author:"Unknown "}<cite title="Source Title">on {new Date(props.publishedAt).toUTCString()}</cite></footer>
          <a 
            href={props.url} 
            rel="noopener noreferrer" 
            target='_blank' 
            className="btn btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
