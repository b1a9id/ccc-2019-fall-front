import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-6">
                <section>
                  <h3>個人情報の取り扱い</h3>
                  <p>お申込戴きました情報は個人を特定できる状態で、本団体以外の第三者に開示することはございません。 (法律により開示が要求された場合、または他のお客様、あるいはイベントに関係する団体・個人の権利などを守る場合に必要という判断が合理的にされる場合を除きます) </p>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <h3>About Us</h3>
                  <p>
                    <a href="http://www.java-users.jp/?page_id=7" target="_blank">JJUGについて</a>
                  </p>
                  <p>
                    <a href="http://www.java-users.jp/?page_id=18" target="_blank">入会案内</a>
                  </p>
                  <p>
                    <a href="http://www.java-users.jp/?page_id=166" target="_blank">幹事会メンバー</a>
                  </p>
                </section>
              </div>
              <div className="column is-2 social">
                <a title="facebook" href="https://www.facebook.com/japanjug/" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/jjug" target="_blank">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div>
              <p>© Copyright 2019 JJUG - All rights reserved. </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
