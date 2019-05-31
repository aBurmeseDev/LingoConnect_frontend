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

import img1 from "../resources/hello-gif.gif";
import img2 from "../resources/hello-gif1.jpg";
import img3 from "../resources/hello-gif3.gif";
import img4 from "../resources/hello-gif4.gif";
import globe from "../resources/globe-lan.jpg";


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
    console.log(this.state);
  };
  handleSavePhrase = async data => {
    const { currentUser } = this.props;
    const { text, translation, setLanguage, transLanguage } = this.state;
    console.log(data);
    let obj = {
      userId: currentUser.id,
      text: text,
      phrase: translation,
      setLanguage: setLanguage,
      transLanguage: transLanguage
    };
    try {
      const savePhrase = await fetch("http://localhost:5000/phrases/create", {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response = await savePhrase.json();
      this.setState({
        translation: "Translating..."
      });
      console.log(response);
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
      console.log(translateJson);
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
    // add close modal function
  };
  render() {
    const { translation } = this.state;

    // onchange this.setstate to api key inputs
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
            // label="Choose your Language"
            // style={{ display: "block" }}
            name="setLanguage"
            onChange={this.handleChange}
          >
            <option value="en" defaultValue="1">
              English
            </option>
            <option value="az">Azerbaijan</option>
            <option value="sq">Albanian</option>
            <option value="am">Amharic</option>
            <option value="ar">Arabic</option>
            <option value="hy">Armenian</option>
            <option value="af">Afrikaans</option>
            <option value="eu">Basque</option>
            <option value="ba">Bashkir</option>
            <option value="be">Belarusian</option>
            <option value="bn">Bengali</option>
            <option value="my">Burmese</option>
            <option value="bg">Bulgarian</option>
            <option value="bs">Bosnian</option>
            <option value="cy">Welsh</option>
            <option value="hu">Hungarian</option>
            <option value="vi">Vietnamese</option>
            <option value="ht">Haitian</option>
            <option value="gl">Galician</option>
            <option value="nl">Dutch</option>
            <option value="mrj">Hill Mari</option>
            <option value="el">Greek</option>
            <option value="ka">Georgian</option>
            <option value="gu">Gujarati</option>
            <option value="da">Danish</option>
            <option value="he">Hebrew</option>
            <option value="yi">Yiddish</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="is">Icelandic</option>
            <option value="es">Spanish</option>
            <option value="kk">Kazakh</option>
            <option value="kn">Kannada</option>
            <option value="ca">Catalan</option>
            <option value="ky">Kyrgyz</option>
            <option value="zh">Chinese</option>
            <option value="ko">Korean</option>
            <option value="xh">Xhosa</option>
            <option value="km">Khmer</option>
            <option value="lo">Laotian</option>
            <option value="la">Latin</option>
            <option value="lv">Latvian</option>
            <option value="lt">Lithuanian</option>
            <option value="lb">Luxembourgish</option>
            <option value="mg">Malagasy</option>
            <option value="ms">Malay</option>
            <option value="ml">Malayalam</option>
            <option value="mt">Maltese</option>
            <option value="mk">Macedonian</option>
            <option value="mi">Maori</option>
            <option value="mr">Marathi</option>
            <option value="mhr">Mari</option>
            <option value="mn">Mongolian</option>
            <option value="de">German</option>
            <option value="ne">Nepali</option>
            <option value="no">Norwegian</option>
            <option value="pa">Punjabi</option>
            <option value="pap">Papiamento</option>
            <option value="fa">Persian</option>
            <option value="bs">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="ceb">Cebuano</option>
            <option value="sr">Serbian</option>
            <option value="si">Sinhala</option>
            <option value="sk">Slovakian</option>
            <option value="sw">Swahili</option>
            <option value="su">Sundanese</option>
            <option value="tg">Tajik</option>
            <option value="th">Thai</option>
            <option value="tl">Tagalog</option>
            <option value="ta">Tamil</option>
            <option value="tt">Tatar</option>
            <option value="te">Telugu</option>
            <option value="tr">Turkish</option>
            <option value="udm">Udmurt</option>
            <option value="uz">Uzbek</option>
            <option value="uk">Ukrainian</option>
            <option value="ur">Urdu</option>
            <option value="fl">Finnish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="hr">Croatian</option>
            <option value="cs">Czech</option>
            <option value="sv">Swedish</option>
            <option value="gd">Scottish</option>
            <option value="et">Estonian</option>
            <option value="eo">Esperanto</option>
            <option value="jv">Javanese</option>
            <option value="ja">Japanese</option>
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
              //   style={{ display: "block" }}
            >
              <option value="en" defaultValue="1">
                English
              </option>
              <option value="az">Azerbaijan</option>
              <option value="sq">Albanian</option>
              <option value="am">Amharic</option>
              <option value="ar">Arabic</option>
              <option value="hy">Armenian</option>
              <option value="af">Afrikaans</option>
              <option value="eu">Basque</option>
              <option value="ba">Bashkir</option>
              <option value="be">Belarusian</option>
              <option value="bn">Bengali</option>
              <option value="my">Burmese</option>
              <option value="bg">Bulgarian</option>
              <option value="bs">Bosnian</option>
              <option value="cy">Welsh</option>
              <option value="hu">Hungarian</option>
              <option value="vi">Vietnamese</option>
              <option value="ht">Haitian</option>
              <option value="gl">Galician</option>
              <option value="nl">Dutch</option>
              <option value="mrj">Hill Mari</option>
              <option value="el">Greek</option>
              <option value="ka">Georgian</option>
              <option value="gu">Gujarati</option>
              <option value="da">Danish</option>
              <option value="he">Hebrew</option>
              <option value="yi">Yiddish</option>
              <option value="id">Indonesian</option>
              <option value="ga">Irish</option>
              <option value="it">Italian</option>
              <option value="is">Icelandic</option>
              <option value="es">Spanish</option>
              <option value="kk">Kazakh</option>
              <option value="kn">Kannada</option>
              <option value="ca">Catalan</option>
              <option value="ky">Kyrgyz</option>
              <option value="zh">Chinese</option>
              <option value="ko">Korean</option>
              <option value="xh">Xhosa</option>
              <option value="km">Khmer</option>
              <option value="lo">Laotian</option>
              <option value="la">Latin</option>
              <option value="lv">Latvian</option>
              <option value="lt">Lithuanian</option>
              <option value="lb">Luxembourgish</option>
              <option value="mg">Malagasy</option>
              <option value="ms">Malay</option>
              <option value="ml">Malayalam</option>
              <option value="mt">Maltese</option>
              <option value="mk">Macedonian</option>
              <option value="mi">Maori</option>
              <option value="mr">Marathi</option>
              <option value="mhr">Mari</option>
              <option value="mn">Mongolian</option>
              <option value="de">German</option>
              <option value="ne">Nepali</option>
              <option value="no">Norwegian</option>
              <option value="pa">Punjabi</option>
              <option value="pap">Papiamento</option>
              <option value="fa">Persian</option>
              <option value="bs">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="ro">Romanian</option>
              <option value="ru">Russian</option>
              <option value="ceb">Cebuano</option>
              <option value="sr">Serbian</option>
              <option value="si">Sinhala</option>
              <option value="sk">Slovakian</option>
              <option value="sw">Swahili</option>
              <option value="su">Sundanese</option>
              <option value="tg">Tajik</option>
              <option value="th">Thai</option>
              <option value="tl">Tagalog</option>
              <option value="ta">Tamil</option>
              <option value="tt">Tatar</option>
              <option value="te">Telugu</option>
              <option value="tr">Turkish</option>
              <option value="udm">Udmurt</option>
              <option value="uz">Uzbek</option>
              <option value="uk">Ukrainian</option>
              <option value="ur">Urdu</option>
              <option value="fl">Finnish</option>
              <option value="fr">French</option>
              <option value="hi">Hindi</option>
              <option value="hr">Croatian</option>
              <option value="cs">Czech</option>
              <option value="sv">Swedish</option>
              <option value="gd">Scottish</option>
              <option value="et">Estonian</option>
              <option value="eo">Esperanto</option>
              <option value="jv">Javanese</option>
              <option value="ja">Japanese</option>
            </Select>
            <br />
            {/* Need to make into a drop down options like "en - English" so we can preset the language */}
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
            {this.props.currentUser && translation !== "Translating..." ? (
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

          <div className="col s12 l5" style={{ textAlign: "center" }}>

            <h6>Joshua Ablan</h6>
            <a style={{ paddingRight: "0.5rem" }}>
              <i class="fab fa-linkedin fa-2x" />
            </a>
            <a>
              <i class="fab fa-github-square fa-2x" />
            </a>
          </div>

          <div className="col s12 l5" style={{ textAlign: "center" }}>

            <h6>John Lwin</h6>
            <a style={{ paddingRight: "0.5rem" }}>
              <i class="fab fa-linkedin fa-2x" />
            </a>
            <a>
              <i class="fab fa-github-square fa-2x" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Translate;
