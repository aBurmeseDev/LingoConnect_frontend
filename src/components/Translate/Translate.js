import React, { Component } from "react";

class Translate extends Component {
    state = { 
        sentence: "",
        translation: ""
    }
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    render() { 
        // onchange this.setstate to api key inputs
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>
                    Language:
                    <select>
                        <option value="en" selected={this.props.user.primaryLanguage}>English</option>
                        <option value="az">Azerbaijan</option>
                        <option value="sq">Albanian</option>
                        <option value="am">Amharic</option>
                        <option value="Arabic">Arabic</option>
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
                        
                    </select>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    email:
                    <input type="email" name="email" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    Primary language:
                    <input type="text" name="primaryLanguage" onChange={this.handleChange} />
                    <br />
                {/* Need to make into a drop down options like "en - English" so we can preset the language */}
                </label>
                <label>
                    password:
                    <input type="text" name="password" onChange={this.handleChange} />
                    <br />
                </label>
                <label>
                    verify_password:
                    <input
                        type="text"
                        name="verify_password"
                        onChange={this.handleChange}
                    />
                    <br />
                </label>
                <button type="submit">Translate!</button>
            </form>
        );
    }
}
 
export default Translate;