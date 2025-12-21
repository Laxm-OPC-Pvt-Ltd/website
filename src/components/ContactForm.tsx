"use client";

import CTAButton from "@/components/CTAButton";

export default function ContactForm() {
  return (
    <form
      action="https://forms.zohopublic.in/financethe1/form/ContactUs/formperma/PO9Ck7wpjGzHNGOsFtL4vp4VBg5815_q7BBkqrztQzw/htmlRecords/submit"
      name="form"
      id="form"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      className="mt-8 space-y-6"
    >
      <input type="hidden" name="zf_referrer_name" value="" />
      <input type="hidden" name="zf_redirect_url" value="" />
      <input type="hidden" name="zc_gad" value="" />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Contact Person */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            First Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            maxLength={255}
            name="Name_First"
            placeholder="First Name"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Last Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            maxLength={255}
            name="Name_Last"
            placeholder="Last Name"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Company Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            name="SingleLine"
            maxLength={255}
            placeholder="Your Company"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Email <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            maxLength={255}
            name="Email"
            placeholder="john@example.com"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            required
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Employee Count */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Employee Count
          </label>
          <input
            type="text"
            name="Number1"
            maxLength={18}
            placeholder="e.g. 50"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Website
          </label>
          <input
            type="text"
            maxLength={2083}
            name="Website"
            placeholder="https://example.com"
            className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>

      {/* Country Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-200">
          Country
        </label>
        <select
          name="Dropdown"
          className="w-full rounded-md border border-white/20 bg-white/5 p-3 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold [&>option]:bg-zinc-900"
        >
          <option value="-Select-">-Select-</option>
          <option value="Åland Islands">Åland Islands</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Akrotiri">Akrotiri</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Ashmore and Cartier Islands">
            Ashmore and Cartier Islands
          </option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Bassas Da India">Bassas Da India</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </option>
          <option value="British Virgin Islands">British Virgin Islands</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burma">Burma</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Caribbean Netherlands">Caribbean Netherlands</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Clipperton Island">Clipperton Island</option>
          <option value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Coral Sea Islands">Coral Sea Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D&apos;Ivoire">Cote D&apos;Ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Curaçao">Curaçao</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Democratic Republic of the Congo">
            Democratic Republic of the Congo
          </option>
          <option value="Denmark">Denmark</option>
          <option value="Dhekelia">Dhekelia</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Europa Island">Europa Island</option>
          <option value="Falkland Islands (Islas Malvinas)">
            Falkland Islands (Islas Malvinas)
          </option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Federated States of Micronesia">
            Federated States of Micronesia
          </option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern and Antarctic Lands">
            French Southern and Antarctic Lands
          </option>
          <option value="Gabon">Gabon</option>
          <option value="Gaza Strip">Gaza Strip</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Glorioso Islands">Glorioso Islands</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-bissau">Guinea-bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">
            Heard Island and Mcdonald Islands
          </option>
          <option value="Holy See (Vatican City)">
            Holy See (Vatican City)
          </option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Jan Mayen">Jan Mayen</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Juan De Nova Island">Juan De Nova Island</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macau">Macau</option>
          <option value="Macedonia">Macedonia</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Moldova">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Navassa Island">Navassa Island</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Netherlands Antilles</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="North Korea">North Korea</option>
          <option value="Northern Mariana Islands">
            Northern Mariana Islands
          </option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestine">Palestine</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paracel Islands">Paracel Islands</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn Islands">Pitcairn Islands</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Republic of the Congo">Republic of the Congo</option>
          <option value="Reunion">Reunion</option>
          <option value="Romania">Romania</option>
          <option value="Russia">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Barthélemy">Saint Barthélemy</option>
          <option value="Saint Helena">Saint Helena</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Martin">Saint Martin</option>
          <option value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </option>
          <option value="Saint Vincent and the Grenadines">
            Saint Vincent and the Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Sint Maarten">Sint Maarten</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and the South Sandwich Islands">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="South Korea">South Korea</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Spratly Islands">Spratly Islands</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard">Svalbard</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syria">Syria</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="The Bahamas">The Bahamas</option>
          <option value="The Gambia">The Gambia</option>
          <option value="Timor-leste">Timor-leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tromelin Island">Tromelin Island</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Virgin Islands">Virgin Islands</option>
          <option value="Wake Island">Wake Island</option>
          <option value="Wallis and Futuna">Wallis and Futuna</option>
          <option value="West Bank">West Bank</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div className="text-sm text-gray-300">
          Laxm OPC{" "}
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center gap-3">
          <input
            className="h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold"
            name="TermsConditions"
            type="checkbox"
            required
          />
          <label className="text-sm text-gray-200">
            I accept the Terms and Conditions.
          </label>
        </div>
      </div>

      <div className="flex justify-start">
        <CTAButton type="submit">Submit Inquiry</CTAButton>
      </div>
    </form>
  );
}
