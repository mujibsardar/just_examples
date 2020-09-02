import React from "react";
import Card from "./Card";

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { stream: this.handleData() };
      this.handleData = this.handleData.bind(this);
    }
    
    handleData() {
        
      //head
      let avatars = ['https://goo.gl/KxWSrJ', 'https://goo.gl/SPCfxF', 'https://goo.gl/ig86pL', 'https://goo.gl/FpZZTH'];
      let display_names = ['The Practical Dev', 'Arnold', 'Master Shake', 'SpongeBob SquarePants'];
      let user_names = ['ThePracticalDev', 'HeyArnold', 'realMasterShake', 'SpongeBob'];
      let date = new Date().toLocaleString([], {month: 'short', day: 'numeric'});
      
      //body
      let mentions = ['dceddia', '', '', 'PatrickStar'];
      let raw_text = [
        'Learning React? Start Small. { author: @ }',
        'Lorem ipsum dolor amet tbh sriracha wayfarers, hoodie meditation chambray cupidatat kickstarter beard.',
        'Lorem ipsum dolor fam gastropub tousled photo booth narwhal tacos you probably haven\'t heard of them.',
        'Lol @'
      ];
      
      let text = raw_text.map((el, i) => {
        let mention = el.indexOf('@');
        let space = '';
        let link = '';
        let txt_before = '';
        let txt_after = '';
        
        if (mention > -1) {
          space = el.indexOf(' ', mention);
          if (space > -1) {
            link = el.slice(mention, space) + mentions[i];
            txt_before = el.slice(0, mention);
            txt_after = el.slice(space);
          } else {
            link = el.slice(mention) + mentions[i];
            txt_before = el.slice(0, mention);
          }
          return <span>{txt_before}<a href="#">{link}</a>{txt_after}</span>
        } else {
          return el
        }
      });
      
      let content = [
        {
          media: true,
          type: 'text',
          source: {
            title: 'Learning React? Start Small.', 
            src: '',
            style: {bg:'#FE9F12', className: 'special'}
          },
          caption: {
            title: 'Learning React? Start Small.', 
            text: 'Can\'t pry yourself away from the tutorials? The cur is to make tiny little experiment apps.', 
            source: 'dev.to'
          }
        },
        {
          media: true,
          type: 'text',
          source: {
            title: 'Some text or media element from the shared source...', 
            src: '',
            style: ''
          },
          caption: {
            title: 'Probably Title of Shared Content', 
            text: 'Maybe a summary or snippet from the shared content.', 
            source: 'short.url'
          }
        },
        {
          media: false, 
          type: '',      
          source: {
            title: '', 
            src: '',
            style: ''
          }, 
          caption: {
            title: '', 
            text: '', 
            source: ''
          }
        },
        {
          media: true,  
          type: 'image', 
          source: {
            title: '', 
            src: 'https://i1.wp.com/media.giphy.com/media/xUPGcKvJyyTXUJBfMY/giphy.gif?w=640&ssl=1',
            style: ''
          }, 
          caption: {
            title: '', 
            text: '', 
            source: ''
          }
        }
      ]; 
      
      //foot
      let icon_vals = [
        {comment: 2,  retweet: 47, heart: 190, envelope: ''},
        {comment: 7,  retweet: 23, heart: 11,  envelope: ''},
        {comment: 3,  retweet: 1,  heart: 2,   envelope: ''},
        {comment: 19, retweet: 61, heart: 8,   envelope: ''},
      ];
      
      //post
      let stream = [];
      for (let i = 0; i < user_names.length; i++) {
        stream.push({
          avatar: avatars[i], 
          name: display_names[i], 
          user: user_names[i], 
          date: date, 
          text: text[i],
          content: content[i],
          vals: icon_vals[i]
        });
      }
      //couldn't decide if serious or funny should come first (for seeing in search...)
      let rng = Math.round(Math.random());
      return rng === 1 ? stream.reverse() : stream;
    }
    
    render() {
      return(
        <main id="stream">
          {this.state.stream.map((el, i) => 
            <Card 
              key={i} 
              stream={el}
            />
          )}
        </main>
      );
    }
  }

  export default Main;
  