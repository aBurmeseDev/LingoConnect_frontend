import React, { Component } from "react";

import {
  Button,
  Select,
  TextInput,
  Icon,
  Modal,
  Slide,
  Slider,
  Caption
} from "react-materialize";

import img2 from "../resources/hello-gif1.jpg";
import img3 from "../resources/hello-gif3.gif";
import img4 from "../resources/hello-gif4.gif";

const languages = [
  {
    value: "en",
    name: "English"
  },
  {
    value: "az",
    name: "Azerbaijan"
  },
  {
    value: "sq",
    name: "Albanian"
  },
  {
    value: "am",
    name: "Amharic"
  },
  {
    value: "ar",
    name: "Arabic"
  },
  {
    value: "hy",
    name: "Armenian"
  },
  {
    value: "af",
    name: "Afrikaans"
  },
  {
    value: "eu",
    name: "Basque"
  },
  {
    value: "ba",
    name: "Bashkir"
  },
  {
    value: "be",
    name: "Belarusian"
  },
  {
    value: "bn",
    name: "Bengali"
  },
  {
    value: "my",
    name: "Burmese"
  },
  {
    value: "bg",
    name: "Bulgarian"
  },
  {
    value: "bs",
    name: "Bosnian"
  },
  {
    value: "cy",
    name: "Welsh"
  },
  {
    value: "hu",
    name: "Hungarian"
  },
  {
    value: "vi",
    name: "Vietnamese"
  },
  {
    value: "ht",
    name: "Haitian(Creole)"
  },
  {
    value: "gl",
    name: "Galician"
  },
  {
    value: "nl",
    name: "Dutch"
  },
  {
    value: "mrj",
    name: "Hill Mari"
  },
  {
    value: "el",
    name: "Greek"
  },
  {
    value: "ka",
    name: "Georgian"
  },
  {
    value: "gu",
    name: "Gujarati"
  },
  {
    value: "da",
    name: "Danish"
  },
  {
    value: "he",
    name: "Hebrew"
  },
  {
    value: "yi",
    name: "Yiddish"
  },
  {
    value: "id",
    name: "Indonesian"
  },
  {
    value: "ga",
    name: "Irish"
  },
  {
    value: "it",
    name: "Italian"
  },
  {
    value: "is",
    name: "Icelandic"
  },
  {
    value: "es",
    name: "Spanish"
  },
  {
    value: "kk",
    name: "Kazakh"
  },
  {
    value: "kn",
    name: "Kannada"
  },
  {
    value: "ca",
    name: "Catalan"
  },
  {
    value: "ky",
    name: "Kyrgyz"
  },
  {
    value: "zh",
    name: "Chinese"
  },
  {
    value: "ko",
    name: "Korean"
  },
  {
    value: "xh",
    name: "Xhosa"
  },
  {
    value: "km",
    name: "Khmer"
  },
  {
    value: "lo",
    name: "Laotian"
  },
  {
    value: "lv",
    name: "Latvian"
  },
  {
    value: "lt",
    name: "Lithuanian"
  },
  {
    value: "la",
    name: "Latin"
  },
  {
    value: "lb",
    name: "Luxembourgish"
  },
  {
    value: "mg",
    name: "Malagasy"
  },
  {
    value: "ms",
    name: "Malay"
  },
  {
    value: "ml",
    name: "Malayalam"
  },
  {
    value: "mt",
    name: "Maltese"
  },
  {
    value: "mk",
    name: "Macedonian"
  },
  {
    value: "mi",
    name: "Maori"
  },
  {
    value: "mr",
    name: "Marathi"
  },
  {
    value: "mhr",
    name: "Mari"
  },
  {
    value: "mn",
    name: "Mongolian"
  },
  {
    value: "de",
    name: "German"
  },
  {
    value: "ne",
    name: "Nepali"
  },
  {
    value: "no",
    name: "Norwegian"
  },
  {
    value: "pa",
    name: "Punjabi"
  },
  {
    value: "pap",
    name: "Papiamento"
  },
  {
    value: "fa",
    name: "Persian"
  },
  {
    value: "pl",
    name: "Polish"
  },
  {
    value: "pt",
    name: "Portuguese"
  },
  {
    value: "ro",
    name: "Romanian"
  },
  {
    value: "ru",
    name: "Russian"
  },
  {
    value: "ceb",
    name: "Cebuano"
  },
  {
    value: "sr",
    name: "Serbian"
  },
  {
    value: "si",
    name: "Sinhala"
  },
  {
    value: "sk",
    name: "Slovenian"
  },
  {
    value: "sw",
    name: "Swahili"
  },
  {
    value: "su",
    name: "Sundanese"
  },
  {
    value: "tg",
    name: "Tajik"
  },
  {
    value: "th",
    name: "Thai"
  },
  {
    value: "tl",
    name: "Tagalog"
  },
  {
    value: "ta",
    name: "Tamil"
  },
  {
    value: "tt",
    name: "Tatar"
  },
  {
    value: "te",
    name: "Telugu"
  },
  {
    value: "tr",
    name: "Turkish"
  },
  {
    value: "udm",
    name: "Udmurt"
  },
  {
    value: "uz",
    name: "Uzbek"
  },
  {
    value: "uk",
    name: "Ukrainian"
  },
  {
    value: "ur",
    name: "Urdu"
  },
  {
    value: "fi",
    name: "Finnish"
  },
  {
    value: "fr",
    name: "French"
  },
  {
    value: "hi",
    name: "Hindi"
  },
  {
    value: "hr",
    name: "Croatian"
  },
  {
    value: "cs",
    name: "Czech"
  },
  {
    value: "sv",
    name: "Swedish"
  },
  {
    value: "gd",
    name: "Scottish"
  },
  {
    value: "et",
    name: "Estonian"
  },
  {
    value: "eo",
    name: "Esperanto"
  },
  {
    value: "jv",
    name: "Javanese"
  },
  {
    value: "ja",
    name: "Japanese"
  },
]
class Translate extends Component {
  state = {
    text: "",
    translation: "Translating...",
    setLanguage: "en",
    transLanguage: "en"
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSavePhrase = async data => {
    const { currentUser } = this.props;
    const { text, translation, setLanguage, transLanguage } = this.state;
    let obj = {
      userId: currentUser.id,
      text: text,
      phrase: translation,
      setLanguage: setLanguage,
      transLanguage: transLanguage
    };
    try {
      const savePhrase = await fetch(`${process.env.REACT_APP_BACKEND_URL}/phrases/create`, {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      await savePhrase.json();

      this.setState({
        translation: "Translating..."
      });
    } catch (error) {
      console.log(error);
    }
  };
  getTranslation = async () => {
    try {
      const translate = await fetch(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${
          this.state.setLanguage
        }-${this.state.transLanguage}&key=${
          process.env.REACT_APP_API_KEY
        }&text=${this.state.text}`,
        {
          credentials: "omit",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      const translateJson = await translate.json();
      this.setState({
        translation: translateJson.text[0]
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.getTranslation();
  };
  render() {
    const { translation } = this.state;
    return (
      <>
        <Slider style={{ marginBottom: "2rem" }}>
          <Slide image={<img src={img2} alt="image2" className="img2" />}>
            <Caption placement="left">
              <h3 style={{ fontWeight: "bold" }}>This is LingoConnect!</h3>
              <h5 className="light grey-text text-lighten-3">
                Translate in over 100 languages. <br />
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={img3} alt="img3" />} />
          <Slide image={<img src={img4} alt="image4" />} />
        </Slider>
        {!this.props.currentUser && (
          <h5 style={{ textAlign: "center" }}>
            {" "}
            Translate and login to save your phrases!
          </h5>
        )}
        <form onSubmit={this.handleSubmit} id="translateForm">
          <label>Choose your Language:</label>
          <Select
            name="setLanguage"
            onChange={this.handleChange}
          >
            {
              languages.map((l,i)=>
                <option value={l.value}>{l.name}</option> 
              )
            }
            
          </Select>

          <label style={{ color: "black" }}>
            <Icon small>edit</Icon>
          </label>

          <TextInput
            type="text"
            name="text"
            onChange={this.handleChange}
            placeholder="How do you say?"
            autoComplete="off"
          />
          <br />

          <label>
            Translate to:
            <Select
              name="transLanguage"
              onChange={this.handleChange}
            >
              {
              languages.map((l,i)=>
                <option value={l.value}>{l.name}</option> 
              )
              }
            </Select>
            <br />
          </label>
          <Button
            type="submit"
            href="#modal3"
            className="modal-trigger"
            style={{ backgroundColor: "#133062" }}
            onClick={this.handleSubmit}
          >
            Translate!
          </Button>
          <Modal id="modal3">
            <h3 style={{ textAlign: "center" }}>{translation}</h3>
            {this.props.currentUser.username && translation !== "Translating..." ? (
              <Button
                onClick={() => this.handleSavePhrase(this.state)}
                className="modal-close"
              >
                Save
              </Button>
            ) : (
              <h5 style={{ textAlign: "center" }}>Log in to save phrases!</h5>
            )}
          </Modal>
        </form>
        <div className="row">
          <h5 style={{ textAlign: "center" }}>Creators</h5>

          <div className="col s12 l6" style={{ textAlign: "center" }}>
            <h6>Joshua Ablan</h6>
            <a 
              style={{ paddingRight: "0.5rem" }}
              href="https://www.linkedin.com/in/joshablan/"
              >
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://github.com/jablan08">
              <i className="fab fa-github-square fa-2x" />
            </a>
          </div>

          <div
            className="col s12 l6"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h6>John Lwin</h6>
            <a
              href="https://www.linkedin.com/in/john-lwin/"
              style={{ paddingRight: "0.5rem" }}
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://github.com/aBurmeseDev">
              <i className="fab fa-github-square fa-2x" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Translate;
