const html = `<div className="d-flex flex-row flex-wrap">
  <CountryLabel className='mr-3' country={{code: 'AF', name: 'Afghanistan'}} />
  <CountryLabel className='mr-3' country={{code: 'AL', name: 'Albania'}} />
  <CountryLabel className='mr-3' country={{code: 'DZ', name: 'Algeria'}} />
  <CountryLabel className='mr-3' country={{code: 'AS', name: 'American Samoa'}} />
  <CountryLabel className='mr-3' country={{code: 'AD', name: 'Andorra'}} />
  <CountryLabel className='mr-3' country={{code: 'AO', name: 'Angola'}} />
  <CountryLabel className='mr-3' country={{code: 'AI', name: 'Anguilla'}} />
  <CountryLabel className='mr-3' country={{code: 'AR', name: 'Argentina'}} />
  <CountryLabel className='mr-3' country={{code: 'AM', name: 'Armenia'}} />
  <CountryLabel className='mr-3' country={{code: 'AW', name: 'Aruba'}} />
  <CountryLabel className='mr-3' country={{code: 'AU', name: 'Australia'}} />
  <CountryLabel className='mr-3' country={{code: 'AT', name: 'Austria'}} />
  <CountryLabel className='mr-3' country={{code: 'AZ', name: 'Azerbaijan'}} />
  <CountryLabel className='mr-3' country={{code: 'BS', name: 'Bahamas'}} />
  <CountryLabel className='mr-3' country={{code: 'BH', name: 'Bahrain'}} />
  <CountryLabel className='mr-3' country={{code: 'BD', name: 'Bangladesh'}} />
  <CountryLabel className='mr-3' country={{code: 'BB', name: 'Barbados'}} />
  <CountryLabel className='mr-3' country={{code: 'BY', name: 'Belarus'}} />
  <CountryLabel className='mr-3' country={{code: 'BE', name: 'Belgium'}} />
  <CountryLabel className='mr-3' country={{code: 'BZ', name: 'Belize'}} />
  <CountryLabel className='mr-3' country={{code: 'BJ', name: 'Benin'}} />
  <CountryLabel className='mr-3' country={{code: 'BM', name: 'Bermuda'}} />
  <CountryLabel className='mr-3' country={{code: 'BT', name: 'Bhutan'}} />
  <CountryLabel className='mr-3' country={{code: 'BO', name: 'Bolivia'}} />
  <CountryLabel className='mr-3' country={{code: 'BA', name: 'Bosnia and Herzegovina'}} />
  <CountryLabel className='mr-3' country={{code: 'BW', name: 'Botswana'}} />
  <CountryLabel className='mr-3' country={{code: 'BR', name: 'Brazil'}} />
  <CountryLabel className='mr-3' country={{code: 'VG', name: 'British Virgin Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'BN', name: 'Brunei'}} />
  <CountryLabel className='mr-3' country={{code: 'BG', name: 'Bulgaria'}} />
  <CountryLabel className='mr-3' country={{code: 'BF', name: 'Burkina Faso'}} />
  <CountryLabel className='mr-3' country={{code: 'BI', name: 'Burundi'}} />
  <CountryLabel className='mr-3' country={{code: 'KH', name: 'Cambodia'}} />
  <CountryLabel className='mr-3' country={{code: 'CM', name: 'Cameroon'}} />
  <CountryLabel className='mr-3' country={{code: 'CA', name: 'Canada'}} />
  <CountryLabel className='mr-3' country={{code: 'CV', name: 'Cape Verde'}} />
  <CountryLabel className='mr-3' country={{code: 'KY', name: 'Cayman Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'CF', name: 'Central African Republic'}} />
  <CountryLabel className='mr-3' country={{code: 'CL', name: 'Chile'}} />
  <CountryLabel className='mr-3' country={{code: 'CN', name: 'China'}} />
  <CountryLabel className='mr-3' country={{code: 'CO', name: 'Colombia'}} />
  <CountryLabel className='mr-3' country={{code: 'KM', name: 'Comoros'}} />
  <CountryLabel className='mr-3' country={{code: 'CK', name: 'Cook Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'CR', name: 'Costa Rica'}} />
  <CountryLabel className='mr-3' country={{code: 'HR', name: 'Croatia'}} />
  <CountryLabel className='mr-3' country={{code: 'CU', name: 'Cuba'}} />
  <CountryLabel className='mr-3' country={{code: 'CW', name: 'Curacao'}} />
  <CountryLabel className='mr-3' country={{code: 'CY', name: 'Cyprus'}} />
  <CountryLabel className='mr-3' country={{code: 'CZ', name: 'Czech Republic'}} />
  <CountryLabel className='mr-3' country={{code: 'CD', name: 'Democratic Republic of Congo'}} />
  <CountryLabel className='mr-3' country={{code: 'DK', name: 'Denmark'}} />
  <CountryLabel className='mr-3' country={{code: 'DJ', name: 'Djibouti'}} />
  <CountryLabel className='mr-3' country={{code: 'DM', name: 'Dominica'}} />
  <CountryLabel className='mr-3' country={{code: 'DO', name: 'Dominican Republic'}} />
  <CountryLabel className='mr-3' country={{code: 'TL', name: 'East Timor'}} />
  <CountryLabel className='mr-3' country={{code: 'EC', name: 'Ecuador'}} />
  <CountryLabel className='mr-3' country={{code: 'EG', name: 'Egypt'}} />
  <CountryLabel className='mr-3' country={{code: 'SV', name: 'El Salvador'}} />
  <CountryLabel className='mr-3' country={{code: 'GQ', name: 'Equatorial Guinea'}} />
  <CountryLabel className='mr-3' country={{code: 'ER', name: 'Eritrea'}} />
  <CountryLabel className='mr-3' country={{code: 'EE', name: 'Estonia'}} />
  <CountryLabel className='mr-3' country={{code: 'ET', name: 'Ethiopia'}} />
  <CountryLabel className='mr-3' country={{code: 'FK', name: 'Falkland Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'FO', name: 'Faroe Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'FJ', name: 'Fiji'}} />
  <CountryLabel className='mr-3' country={{code: 'FI', name: 'Finland'}} />
  <CountryLabel className='mr-3' country={{code: 'FR', name: 'France'}} />
  <CountryLabel className='mr-3' country={{code: 'PF', name: 'French Polynesia'}} />
  <CountryLabel className='mr-3' country={{code: 'GA', name: 'Gabon'}} />
  <CountryLabel className='mr-3' country={{code: 'GM', name: 'Gambia'}} />
  <CountryLabel className='mr-3' country={{code: 'GE', name: 'Georgia'}} />
  <CountryLabel className='mr-3' country={{code: 'DE', name: 'Germany'}} />
  <CountryLabel className='mr-3' country={{code: 'GH', name: 'Ghana'}} />
  <CountryLabel className='mr-3' country={{code: 'GI', name: 'Gibraltar'}} />
  <CountryLabel className='mr-3' country={{code: 'GR', name: 'Greece'}} />
  <CountryLabel className='mr-3' country={{code: 'GL', name: 'Greenland'}} />
  <CountryLabel className='mr-3' country={{code: 'GP', name: 'Guadeloupe'}} />
  <CountryLabel className='mr-3' country={{code: 'GU', name: 'Guam'}} />
  <CountryLabel className='mr-3' country={{code: 'GT', name: 'Guatemala'}} />
  <CountryLabel className='mr-3' country={{code: 'GN', name: 'Guinea'}} />
  <CountryLabel className='mr-3' country={{code: 'GW', name: 'Guinea-Bissau'}} />
  <CountryLabel className='mr-3' country={{code: 'GY', name: 'Guyana'}} />
  <CountryLabel className='mr-3' country={{code: 'HT', name: 'Haiti'}} />
  <CountryLabel className='mr-3' country={{code: 'HN', name: 'Honduras'}} />
  <CountryLabel className='mr-3' country={{code: 'HK', name: 'Hong Kong'}} />
  <CountryLabel className='mr-3' country={{code: 'HU', name: 'Hungary'}} />
  <CountryLabel className='mr-3' country={{code: 'IS', name: 'Iceland'}} />
  <CountryLabel className='mr-3' country={{code: 'IN', name: 'India'}} />
  <CountryLabel className='mr-3' country={{code: 'ID', name: 'Indonesia'}} />
  <CountryLabel className='mr-3' country={{code: 'IR', name: 'Iran'}} />
  <CountryLabel className='mr-3' country={{code: 'IQ', name: 'Iraq'}} />
  <CountryLabel className='mr-3' country={{code: 'IE', name: 'Ireland'}} />
  <CountryLabel className='mr-3' country={{code: 'IM', name: 'Isle of Man'}} />
  <CountryLabel className='mr-3' country={{code: 'IL', name: 'Israel'}} />
  <CountryLabel className='mr-3' country={{code: 'IT', name: 'Italy'}} />
  <CountryLabel className='mr-3' country={{code: 'CI', name: 'Ivory Coast'}} />
  <CountryLabel className='mr-3' country={{code: 'JM', name: 'Jamaica'}} />
  <CountryLabel className='mr-3' country={{code: 'JP', name: 'Japan'}} />
  <CountryLabel className='mr-3' country={{code: 'JO', name: 'Jordan'}} />
  <CountryLabel className='mr-3' country={{code: 'KZ', name: 'Kazakhstan'}} />
  <CountryLabel className='mr-3' country={{code: 'KE', name: 'Kenya'}} />
  <CountryLabel className='mr-3' country={{code: 'KI', name: 'Kiribati'}} />
  <CountryLabel className='mr-3' country={{code: 'XK', name: 'Kosovo'}} />
  <CountryLabel className='mr-3' country={{code: 'KW', name: 'Kuwait'}} />
  <CountryLabel className='mr-3' country={{code: 'KG', name: 'Kyrgyzstan'}} />
  <CountryLabel className='mr-3' country={{code: 'LA', name: 'Laos'}} />
  <CountryLabel className='mr-3' country={{code: 'LV', name: 'Latvia'}} />
  <CountryLabel className='mr-3' country={{code: 'LB', name: 'Lebanon'}} />
  <CountryLabel className='mr-3' country={{code: 'LS', name: 'Lesotho'}} />
  <CountryLabel className='mr-3' country={{code: 'LR', name: 'Liberia'}} />
  <CountryLabel className='mr-3' country={{code: 'LY', name: 'Libya'}} />
  <CountryLabel className='mr-3' country={{code: 'LI', name: 'Liechtenstein'}} />
  <CountryLabel className='mr-3' country={{code: 'LT', name: 'Lithuania'}} />
  <CountryLabel className='mr-3' country={{code: 'LU', name: 'Luxembourg'}} />
  <CountryLabel className='mr-3' country={{code: 'MO', name: 'Macau'}} />
  <CountryLabel className='mr-3' country={{code: 'MK', name: 'Macedonia'}} />
  <CountryLabel className='mr-3' country={{code: 'MG', name: 'Madagascar'}} />
  <CountryLabel className='mr-3' country={{code: 'MW', name: 'Malawi'}} />
  <CountryLabel className='mr-3' country={{code: 'MY', name: 'Malaysia'}} />
  <CountryLabel className='mr-3' country={{code: 'MV', name: 'Maldives'}} />
  <CountryLabel className='mr-3' country={{code: 'ML', name: 'Mali'}} />
  <CountryLabel className='mr-3' country={{code: 'MT', name: 'Malta'}} />
  <CountryLabel className='mr-3' country={{code: 'MH', name: 'Marshall Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'MR', name: 'Mauritania'}} />
  <CountryLabel className='mr-3' country={{code: 'MU', name: 'Mauritius'}} />
  <CountryLabel className='mr-3' country={{code: 'MX', name: 'Mexico'}} />
  <CountryLabel className='mr-3' country={{code: 'FM', name: 'Micronesia'}} />
  <CountryLabel className='mr-3' country={{code: 'MD', name: 'Moldova'}} />
  <CountryLabel className='mr-3' country={{code: 'MC', name: 'Monaco'}} />
  <CountryLabel className='mr-3' country={{code: 'MN', name: 'Mongolia'}} />
  <CountryLabel className='mr-3' country={{code: 'ME', name: 'Montenegro'}} />
  <CountryLabel className='mr-3' country={{code: 'MS', name: 'Montserrat'}} />
  <CountryLabel className='mr-3' country={{code: 'MA', name: 'Morocco'}} />
  <CountryLabel className='mr-3' country={{code: 'MZ', name: 'Mozambique'}} />
  <CountryLabel className='mr-3' country={{code: 'MM', name: 'Myanmar [Burma]'}} />
  <CountryLabel className='mr-3' country={{code: 'NA', name: 'Namibia'}} />
  <CountryLabel className='mr-3' country={{code: 'NR', name: 'Nauru'}} />
  <CountryLabel className='mr-3' country={{code: 'NP', name: 'Nepal'}} />
  <CountryLabel className='mr-3' country={{code: 'NL', name: 'Netherlands'}} />
  <CountryLabel className='mr-3' country={{code: 'NC', name: 'New Caledonia'}} />
  <CountryLabel className='mr-3' country={{code: 'NZ', name: 'New Zealand'}} />
  <CountryLabel className='mr-3' country={{code: 'NI', name: 'Nicaragua'}} />
  <CountryLabel className='mr-3' country={{code: 'NE', name: 'Niger'}} />
  <CountryLabel className='mr-3' country={{code: 'NG', name: 'Nigeria'}} />
  <CountryLabel className='mr-3' country={{code: 'NU', name: 'Niue'}} />
  <CountryLabel className='mr-3' country={{code: 'NF', name: 'Norfolk Island'}} />
  <CountryLabel className='mr-3' country={{code: 'KP', name: 'North Korea'}} />
  <CountryLabel className='mr-3' country={{code: 'MP', name: 'Northern Mariana Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'NO', name: 'Norway'}} />
  <CountryLabel className='mr-3' country={{code: 'OM', name: 'Oman'}} />
  <CountryLabel className='mr-3' country={{code: 'PK', name: 'Pakistan'}} />
  <CountryLabel className='mr-3' country={{code: 'PW', name: 'Palau'}} />
  <CountryLabel className='mr-3' country={{code: 'PA', name: 'Panama'}} />
  <CountryLabel className='mr-3' country={{code: 'PG', name: 'Papua New Guinea'}} />
  <CountryLabel className='mr-3' country={{code: 'PY', name: 'Paraguay'}} />
  <CountryLabel className='mr-3' country={{code: 'PE', name: 'Peru'}} />
  <CountryLabel className='mr-3' country={{code: 'PH', name: 'Philippines'}} />
  <CountryLabel className='mr-3' country={{code: 'PN', name: 'Pitcairn Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'PL', name: 'Poland'}} />
  <CountryLabel className='mr-3' country={{code: 'PT', name: 'Portugal'}} />
  <CountryLabel className='mr-3' country={{code: 'PR', name: 'Puerto Rico'}} />
  <CountryLabel className='mr-3' country={{code: 'QA', name: 'Qatar'}} />
  <CountryLabel className='mr-3' country={{code: 'CG', name: 'Republic of the Congo'}} />
  <CountryLabel className='mr-3' country={{code: 'RE', name: 'Reunion'}} />
  <CountryLabel className='mr-3' country={{code: 'RO', name: 'Romania'}} />
  <CountryLabel className='mr-3' country={{code: 'RU', name: 'Russia'}} />
  <CountryLabel className='mr-3' country={{code: 'RW', name: 'Rwanda'}} />
  <CountryLabel className='mr-3' country={{code: 'BL', name: 'Saint Barthélemy'}} />
  <CountryLabel className='mr-3' country={{code: 'SH', name: 'Saint Helena'}} />
  <CountryLabel className='mr-3' country={{code: 'KN', name: 'Saint Kitts and Nevis'}} />
  <CountryLabel className='mr-3' country={{code: 'LC', name: 'Saint Lucia'}} />
  <CountryLabel className='mr-3' country={{code: 'MF', name: 'Saint Martin'}} />
  <CountryLabel className='mr-3' country={{code: 'PM', name: 'Saint Pierre and Miquelon'}} />
  <CountryLabel className='mr-3' country={{code: 'VC', name: 'Saint Vincent and the Grenadines'}} />
  <CountryLabel className='mr-3' country={{code: 'WS', name: 'Samoa'}} />
  <CountryLabel className='mr-3' country={{code: 'SM', name: 'San Marino'}} />
  <CountryLabel className='mr-3' country={{code: 'ST', name: 'Sao Tome and Principe'}} />
  <CountryLabel className='mr-3' country={{code: 'SA', name: 'Saudi Arabia'}} />
  <CountryLabel className='mr-3' country={{code: 'SN', name: 'Senegal'}} />
  <CountryLabel className='mr-3' country={{code: 'RS', name: 'Serbia'}} />
  <CountryLabel className='mr-3' country={{code: 'SC', name: 'Seychelles'}} />
  <CountryLabel className='mr-3' country={{code: 'SL', name: 'Sierra Leone'}} />
  <CountryLabel className='mr-3' country={{code: 'SG', name: 'Singapore'}} />
  <CountryLabel className='mr-3' country={{code: 'SK', name: 'Slovakia'}} />
  <CountryLabel className='mr-3' country={{code: 'SI', name: 'Slovenia'}} />
  <CountryLabel className='mr-3' country={{code: 'SB', name: 'Solomon Islands'}} />
  <CountryLabel className='mr-3' country={{code: 'SO', name: 'Somalia'}} />
  <CountryLabel className='mr-3' country={{code: 'ZA', name: 'South Africa'}} />
  <CountryLabel className='mr-3' country={{code: 'KR', name: 'South Korea'}} />
  <CountryLabel className='mr-3' country={{code: 'SS', name: 'South Sudan'}} />
  <CountryLabel className='mr-3' country={{code: 'ES', name: 'Spain'}} />
  <CountryLabel className='mr-3' country={{code: 'LK', name: 'Sri Lanka'}} />
  <CountryLabel className='mr-3' country={{code: 'SD', name: 'Sudan'}} />
  <CountryLabel className='mr-3' country={{code: 'SR', name: 'Suriname'}} />
  <CountryLabel className='mr-3' country={{code: 'SZ', name: 'Swaziland'}} />
  <CountryLabel className='mr-3' country={{code: 'SE', name: 'Sweden'}} />
  <CountryLabel className='mr-3' country={{code: 'CH', name: 'Switzerland'}} />
  <CountryLabel className='mr-3' country={{code: 'SY', name: 'Syria'}} />
  <CountryLabel className='mr-3' country={{code: 'TW', name: 'Taiwan'}} />
  <CountryLabel className='mr-3' country={{code: 'TJ', name: 'Tajikistan'}} />
  <CountryLabel className='mr-3' country={{code: 'TZ', name: 'Tanzania'}} />
  <CountryLabel className='mr-3' country={{code: 'TH', name: 'Thailand'}} />
  <CountryLabel className='mr-3' country={{code: 'TG', name: 'Togo'}} />
  <CountryLabel className='mr-3' country={{code: 'TK', name: 'Tokelau'}} />
  <CountryLabel className='mr-3' country={{code: 'TT', name: 'Trinidad and Tobago'}} />
  <CountryLabel className='mr-3' country={{code: 'TN', name: 'Tunisia'}} />
  <CountryLabel className='mr-3' country={{code: 'TR', name: 'Turkey'}} />
  <CountryLabel className='mr-3' country={{code: 'TM', name: 'Turkmenistan'}} />
  <CountryLabel className='mr-3' country={{code: 'TV', name: 'Tuvalu'}} />
  <CountryLabel className='mr-3' country={{code: 'UG', name: 'Uganda'}} />
  <CountryLabel className='mr-3' country={{code: 'UA', name: 'Ukraine'}} />
  <CountryLabel className='mr-3' country={{code: 'AE', name: 'United Arab Emirates'}} />
  <CountryLabel className='mr-3' country={{code: 'GB', name: 'United Kingdom'}} />
  <CountryLabel className='mr-3' country={{code: 'US', name: 'United States'}} />
  <CountryLabel className='mr-3' country={{code: 'UY', name: 'Uruguay'}} />
  <CountryLabel className='mr-3' country={{code: 'UZ', name: 'Uzbekistan'}} />
  <CountryLabel className='mr-3' country={{code: 'VU', name: 'Vanuatu'}} />
  <CountryLabel className='mr-3' country={{code: 'VA', name: 'Vatican'}} />
  <CountryLabel className='mr-3' country={{code: 'VE', name: 'Venezuela'}} />
  <CountryLabel className='mr-3' country={{code: 'VN', name: 'Vietnam'}} />
  <CountryLabel className='mr-3' country={{code: 'EH', name: 'Western Sahara'}} />
  <CountryLabel className='mr-3' country={{code: 'YE', name: 'Yemen'}} />
  <CountryLabel className='mr-3' country={{code: 'ZM', name: 'Zambia'}} />
  <CountryLabel className='mr-3' country={{code: 'ZW', name: 'Zimbabwe'}} />
</div>`;

const countriesList = {
  id: 'countriesList',
  name: 'Countries List',
  html,
  disableCode: true
};

export default countriesList;
