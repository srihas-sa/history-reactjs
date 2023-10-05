import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    list: initialHistoryList,
    searchinput: '',
  }

  onClickedCancel = id => {
    const {list} = this.state
    const updatedlist = list.filter(eachitem => eachitem.id !== id)
    this.setState({list: updatedlist})
  }

  onenteringsearch = e => {
    console.log(e.target.value)
    this.setState({searchinput: e.target.value})
  }

  render() {
    const {list, searchinput} = this.state
    const length = list.length > 0

    return (
      <div>
        <div className="head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <BsSearch />
            <input
              type="search"
              value="search"
              onChange={e => this.onenteringsearch(e)}
            />
          </div>
        </div>
        <div className="bottom">
          {length ? (
            <div className="borders">
              {list.map(eachitem =>
                eachitem.title.includes(searchinput) ? (
                  <ul>
                    <li className="justiffyy">
                      <p className="margins">{eachitem.timeAccessed}</p>
                      <img
                        src={eachitem.logoUrl}
                        alt="app logo"
                        className="logourl"
                      />
                      {console.log(eachitem.title)}
                      <p className="margins">{eachitem.title}</p>
                      <p className="margins">{eachitem.domainUrl}</p>
                      <button
                        data-testid="delete"
                        type="button"
                        onClick={() => this.onClickedCancel(eachitem.id)}
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                          alt="delete"
                        />
                      </button>
                    </li>
                  </ul>
                ) : null,
              )}
            </div>
          ) : (
            <div>
              <h1>There is no history to show</h1>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
