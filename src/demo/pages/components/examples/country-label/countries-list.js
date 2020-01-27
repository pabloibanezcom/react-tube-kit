const html = `<div>
  <h3 className="right-line mb-4">A</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AF', name: 'Afghanistan'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AL', name: 'Albania'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DZ', name: 'Algeria'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AS', name: 'American Samoa'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AD', name: 'Andorra'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AO', name: 'Angola'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AI', name: 'Anguilla'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AR', name: 'Argentina'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AM', name: 'Armenia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AW', name: 'Aruba'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AU', name: 'Australia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AT', name: 'Austria'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AZ', name: 'Azerbaijan'}} />
  </div>
  <h3 className="right-line mb-4">B</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BS', name: 'Bahamas'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BH', name: 'Bahrain'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BD', name: 'Bangladesh'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BB', name: 'Barbados'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BY', name: 'Belarus'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BE', name: 'Belgium'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BZ', name: 'Belize'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BJ', name: 'Benin'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BM', name: 'Bermuda'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BT', name: 'Bhutan'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BO', name: 'Bolivia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BA', name: 'Bosnia and Herzegovina'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BW', name: 'Botswana'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BR', name: 'Brazil'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VG', name: 'British Virgin Islands'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BN', name: 'Brunei'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BG', name: 'Bulgaria'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BF', name: 'Burkina Faso'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BI', name: 'Burundi'}} />
  </div>
  <h3 className="right-line mb-4">C</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KH', name: 'Cambodia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CM', name: 'Cameroon'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CA', name: 'Canada'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CV', name: 'Cape Verde'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KY', name: 'Cayman Islands'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CF', name: 'Central African Republic'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CL', name: 'Chile'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CN', name: 'China'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CO', name: 'Colombia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KM', name: 'Comoros'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CK', name: 'Cook Islands'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CR', name: 'Costa Rica'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'HR', name: 'Croatia'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CU', name: 'Cuba'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CW', name: 'Curacao'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CY', name: 'Cyprus'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CZ', name: 'Czech Republic'}} />
  </div>
  <h3 className="right-line mb-4">D</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CD', name: 'Democratic Republic of Congo'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DK', name: 'Denmark'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DJ', name: 'Djibouti'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DM', name: 'Dominica'}} />
      <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DO', name: 'Dominican Republic'}} />
  </div>
  <h3 className="right-line mb-4">E</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TL', name: 'East Timor'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'EC', name: 'Ecuador'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'EG', name: 'Egypt'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SV', name: 'El Salvador'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GQ', name: 'Equatorial Guinea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ER', name: 'Eritrea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'EE', name: 'Estonia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ET', name: 'Ethiopia'}} />
  </div>
  <h3 className="right-line mb-4">F</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FK', name: 'Falkland Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FO', name: 'Faroe Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FJ', name: 'Fiji'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FI', name: 'Finland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FR', name: 'France'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PF', name: 'French Polynesia'}} />
  </div>
  <h3 className="right-line mb-4">G</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GA', name: 'Gabon'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GM', name: 'Gambia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GE', name: 'Georgia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'DE', name: 'Germany'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GH', name: 'Ghana'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GI', name: 'Gibraltar'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GR', name: 'Greece'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GL', name: 'Greenland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GP', name: 'Guadeloupe'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GU', name: 'Guam'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GT', name: 'Guatemala'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GN', name: 'Guinea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GW', name: 'Guinea-Bissau'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GY', name: 'Guyana'}} />
  </div>
  <h3 className="right-line mb-4">H</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'HT', name: 'Haiti'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'HN', name: 'Honduras'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'HK', name: 'Hong Kong'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'HU', name: 'Hungary'}} />
  </div>
  <h3 className="right-line mb-4">I</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IS', name: 'Iceland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IN', name: 'India'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ID', name: 'Indonesia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IR', name: 'Iran'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IQ', name: 'Iraq'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IE', name: 'Ireland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IM', name: 'Isle of Man'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IL', name: 'Israel'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'IT', name: 'Italy'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CI', name: 'Ivory Coast'}} />
  </div>
  <h3 className="right-line mb-4">J</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'JM', name: 'Jamaica'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'JP', name: 'Japan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'JO', name: 'Jordan'}} />
  </div>
  <h3 className="right-line mb-4">K</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KZ', name: 'Kazakhstan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KE', name: 'Kenya'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KI', name: 'Kiribati'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'XK', name: 'Kosovo'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KW', name: 'Kuwait'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KG', name: 'Kyrgyzstan'}} />
  </div>
  <h3 className="right-line mb-4">L</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LA', name: 'Laos'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LV', name: 'Latvia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LB', name: 'Lebanon'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LS', name: 'Lesotho'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LR', name: 'Liberia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LY', name: 'Libya'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LI', name: 'Liechtenstein'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LT', name: 'Lithuania'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LU', name: 'Luxembourg'}} />
  </div>
  <h3 className="right-line mb-4">M</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MO', name: 'Macau'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MK', name: 'Macedonia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MG', name: 'Madagascar'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MW', name: 'Malawi'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MY', name: 'Malaysia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MV', name: 'Maldives'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ML', name: 'Mali'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MT', name: 'Malta'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MH', name: 'Marshall Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MR', name: 'Mauritania'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MU', name: 'Mauritius'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MX', name: 'Mexico'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'FM', name: 'Micronesia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MD', name: 'Moldova'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MC', name: 'Monaco'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MN', name: 'Mongolia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ME', name: 'Montenegro'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MS', name: 'Montserrat'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MA', name: 'Morocco'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MZ', name: 'Mozambique'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MM', name: 'Myanmar [Burma]'}} />
  </div>
  <h3 className="right-line mb-4">N</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NA', name: 'Namibia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NR', name: 'Nauru'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NP', name: 'Nepal'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NL', name: 'Netherlands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NC', name: 'New Caledonia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NZ', name: 'New Zealand'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NI', name: 'Nicaragua'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NE', name: 'Niger'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NG', name: 'Nigeria'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NU', name: 'Niue'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NF', name: 'Norfolk Island'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KP', name: 'North Korea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MP', name: 'Northern Mariana Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'NO', name: 'Norway'}} />
  </div>
  <h3 className="right-line mb-4">O</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'OM', name: 'Oman'}} />
  </div>
  <h3 className="right-line mb-4">P</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PK', name: 'Pakistan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PW', name: 'Palau'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PA', name: 'Panama'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PG', name: 'Papua New Guinea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PY', name: 'Paraguay'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PE', name: 'Peru'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PH', name: 'Philippines'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PN', name: 'Pitcairn Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PL', name: 'Poland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PT', name: 'Portugal'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PR', name: 'Puerto Rico'}} />
  </div>
  <h3 className="right-line mb-4">Q</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'QA', name: 'Qatar'}} />
  </div>
  <h3 className="right-line mb-4">R</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CG', name: 'Republic of the Congo'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'RE', name: 'Reunion'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'RO', name: 'Romania'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'RU', name: 'Russia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'RW', name: 'Rwanda'}} />
  </div>
  <h3 className="right-line mb-4">S</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'BL', name: 'Saint Barthélemy'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SH', name: 'Saint Helena'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KN', name: 'Saint Kitts and Nevis'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LC', name: 'Saint Lucia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'MF', name: 'Saint Martin'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'PM', name: 'Saint Pierre and Miquelon'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VC', name: 'Saint Vincent and the Grenadines'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'WS', name: 'Samoa'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SM', name: 'San Marino'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ST', name: 'Sao Tome and Principe'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SA', name: 'Saudi Arabia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SN', name: 'Senegal'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'RS', name: 'Serbia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SC', name: 'Seychelles'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SL', name: 'Sierra Leone'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SG', name: 'Singapore'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SK', name: 'Slovakia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SI', name: 'Slovenia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SB', name: 'Solomon Islands'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SO', name: 'Somalia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ZA', name: 'South Africa'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'KR', name: 'South Korea'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SS', name: 'South Sudan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ES', name: 'Spain'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'LK', name: 'Sri Lanka'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SD', name: 'Sudan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SR', name: 'Suriname'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SZ', name: 'Swaziland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SE', name: 'Sweden'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'CH', name: 'Switzerland'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'SY', name: 'Syria'}} />
  </div>
  <h3 className="right-line mb-4">T</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TW', name: 'Taiwan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TJ', name: 'Tajikistan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TZ', name: 'Tanzania'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TH', name: 'Thailand'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TG', name: 'Togo'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TK', name: 'Tokelau'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TT', name: 'Trinidad and Tobago'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TN', name: 'Tunisia'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TR', name: 'Turkey'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TM', name: 'Turkmenistan'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'TV', name: 'Tuvalu'}} />
  </div>
  <h3 className="right-line mb-4">U</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'UG', name: 'Uganda'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'UA', name: 'Ukraine'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'AE', name: 'United Arab Emirates'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'GB', name: 'United Kingdom'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'US', name: 'United States'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'UY', name: 'Uruguay'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'UZ', name: 'Uzbekistan'}} />
  </div>
  <h3 className="right-line mb-4">V</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
  </div>
  <h3 className="right-line mb-4">V</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VU', name: 'Vanuatu'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VA', name: 'Vatican'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VE', name: 'Venezuela'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'VN', name: 'Vietnam'}} />
  </div>
  <h3 className="right-line mb-4">W</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'EH', name: 'Western Sahara'}} />
  </div>
  <h3 className="right-line mb-4">Y</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'YE', name: 'Yemen'}} />
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ZM', name: 'Zambia'}} />
  </div>
  <h3 className="right-line mb-4">Z</h3>
  <div className="d-flex flex-row flex-wrap pl-3 mb-3">
    <CountryLabel className='mr-3 mb-2' badge type='light'  country={{code: 'ZW', name: 'Zimbabwe'}} />
  </div>
</div>`;

const countriesList = {
  id: 'countriesList',
  name: 'Countries List',
  html,
  disableCode: true
};

export default countriesList;
