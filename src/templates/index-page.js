import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                      description,
                                      intro,
                                  }) => (
    <div>
        <div
            className="full-width-image margin-top-0"
            style={{
                backgroundImage: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'left',
                    flexDirection: 'column',
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    {title}
                </h1>
                <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                    style={{
                        boxShadow:
                            'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                        backgroundColor: 'rgb(255, 68, 0)',
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    {subheading}
                </h3>
            </div>
        </div>
        <section className="section section--gradient">
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="content">
                                    <div className="tile">
                                        <h2 className="title">{mainpitch.title}</h2>
                                    </div>
                                    <div className="tile">
                                        <p className="subtitle">{mainpitch.description}</p>
                                    </div>
                                    <div className="tile">
                                        <dl>
                                            <dt>主催</dt>
                                            <dd>日本Javaユーザグループ</dd>
                                            <dt>開催日時</dt>
                                            <dd>2019年11月24日（土）</dd>
                                            <dt>場所</dt>
                                            <dd>ベルサール新宿グランド コンファレンスセンター 5F</dd>
                                            <dt>参加費</dt>
                                            <dd>無料</dd>
                                            <dt>ハッシュタグ</dt>
                                            <dd>
                                                <a href="https://twitter.com/search?q=%23jjug_ccc" target="blank">#jjug_ccc</a>（セッションごとのハッシュタグあり）
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="tile">
                                        <h2 className="title">JJUGとは</h2>
                                    </div>
                                    <div className="tile">
                                        <p className="subtitle">日本Javaユーザーグループ（Japan Java User Group/JJUG）は6000人以上の Javaエンジニアが参加する日本最大のJavaコミュニティです。 以下のような活動を行っています。</p>
                                    </div>
                                    <div className="tile">
                                        <dl>
                                            <dt>ナイトセミナー</dt>
                                            <dd>毎月1回夜に開催する勉強会</dd>
                                            <dt>JJUG CCC</dt>
                                            <dd>年2回（春と秋）に開催する1日カンファレンス</dd>
                                            <dt>地方講師派遣</dt>
                                            <dd>地方Javaコミュニティへの講師派遣</dd>
                                            <dt>国際会議参加</dt>
                                            <dd>無料</dd>
                                            <dt>世界中のJUGとの交流</dt>
                                            <dd>
                                                詳しくはJJUGの<a href="http://www.java-users.jp/" target="blank">オフィシャルサイト</a>や<a href="https://jjug.doorkeeper.jp/" target="blank">コミュニティページ（DoorKeeper）</a>を確認してください。
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <Features gridItems={intro.blurbs}/>
                                <div className="content">
                                    <div>
                                        <div className="row">
                                            <div className="col-md-12 p-0">
                                                <iframe
                                                    style={{
                                                        border:0,
                                                        height:'400px',
                                                        width:'100%'
                                                    }}
                                                    title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2270064349586!2d139.69052299999998!3d35.696031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2d4b75dcb57%3A0x634be9803c318437!2z44OZ44Or44K144O844Or5paw5a6_44Kw44Op44Oz44OJ44Kz44Oz44OV44Kh44Os44Oz44K544K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1517582829129"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        Latest stories
                                    </h3>
                                    <BlogRoll/>
                                    <div className="column is-12 has-text-centered">
                                        <Link className="btn" to="/blog">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
