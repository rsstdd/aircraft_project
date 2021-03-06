'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex, _Promise) {
  // Deletes ALL existing entries
  return knex('airplanes').del()
    .then(() => {
      return knex('airplanes').insert([{
        id: 1,
        name: 'Piper J-3',
        description: 'The Piper J-3 Cub is a single-engine two-seat light touring aircraft and military trainer and liaison aircraft produced by the US-American manufacturer Piper Aircraft Corporation. The US Army variants were initially designated O-59 and later L-4 Grasshopper, US Navy designation of the J-3 was NE-1. The Piper J-3 Cub is a development of the Taylor J-2 Cub. 5703 of the total 19828 built J-3 were military aircraft.',
        year_in_service: 1938,
        country_of_origin: 'United States',
        operators: 'United States, Brazil',
        max_speed: 92,
        max_range: 250,
        ceiling: 12000,
        engines: '1 piston 65hp Contenental A-65',
        img_url: 'https://airandspace.si.edu/sites/default/files/styles/slideshow_sm/public/images/collection-objects/record-images/A19771128000cp10.JPG?itok=26px07OX',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        name: 'Boeing-Stearman Kaydet PT-13 / PT-17 / PT-18 / NS-1 / N2S (Model 75)',
        description: 'The Stearman Model 75 Kaydet is a single-engine two-seat trainer biplane aircraft produced by the US-American manufacturer Stearman Aircraft Company and later by the Boeing Airplane Company. PT-13 / PT-17 / PT-18 were the main-variants used by the USAAC, NS-1 and NS2S for the US Navy. The Stearman 75 Kaydet was used by the US Army Air Corps and the US Navy as a primary/basic trainer aircraft. After WWII many Stearman 75 were used as crop-duster aircraft due to their slow and low-level flight capability.',
        year_in_service: 1934,
        country_of_origin: 'United States',
        operators: 'United States, Brazil, Canada, China, Phillipines',
        max_speed: 124,
        max_range: 505,
        ceiling: 11200,
        engines: '1 Radial 220 hp Lycoming R-680-17',
        img_url: 'http://www.flugzeuginfo.net/acimages/pt13dn_kp.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        name: 'North American T-6 Texan / AT-6 / SNJ / Harvard',
        description: 'The North American T-6 Texan is a single-engine two-seat trainer aircraft produced by the US-American manufacturer North American Aviation. The T-6 was designated AT-6 by the United States Army Air Corps (USAAC) and later by the United States Army Air Forces (USAAF), SNJ by the US Navy and Harvard by the British Commonwealth air forces. The AT-6 was redesignated T-6 in 1948 by the USAF. The T-6 Texan is the world\'s most operated trainer aircraft ever. The T-6 was also license-built in Canada by Noorduyn Aviation and Canada Car and Foundry.',
        year_in_service: 1935,
        country_of_origin: 'United States',
        operators: 'United States, Brazil, Canada, India, New Zealand, United Kingdom, Norway',
        max_speed: 205,
        max_range: 750,
        ceiling: 21500,
        engines: '1 Radial 600hp Pratt & Whitney R-1340-AN-1 Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Fap-instrucao-pilotos-north-american-t-6-texan.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        name: 'Beech / Beechcraft 18 / C-45 Expeditor',
        description: 'The Beechcraft Model 18 is a twin-engine light utility aircraft produced by the US-American manufacturer Beech Aircraft Corporation. The Beech 18 was in military service as military transport and trainer aircraft during and after World War II amongst others by the USAAF/USAF, US Navy and the Royal Air Force. Military variants include the C-45 Expeditor, F-2 Expeditor, AT-7 Navigator, AT-11 Kansan, SNB Kansan and JRB. The Beech Model 18 was built between 1937 and 1970 in at least 32 variants.',
        year_in_service: 1937,
        country_of_origin: 'United States',
        operators: 'United States, Brazil, Canada, France, United Kingdom',
        max_speed: 220,
        max_range: 1901,
        ceiling: 21400,
        engines: '2 Radial 450 hp Pratt & Whitney R-985-AN-14B Wasp Junior',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Beechcraft_AT-7_advanced_training_plane_%2800910460_026%29.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        name: 'Curtiss P-40 Warhawk',
        description: 'The Curtiss P-40 Warhawk is a single-engine single-seat fighter and ground-attack aircraft produced by the US-American manufacturer Curtiss-Wright Airplane Company. P-40 in service with the British Commonwealth and the Soviet Forces were called Tomahawk (P-40B, P-40C) and Kittyhawk (other variants). The P-40 Warhawk is a development of the Curtiss P-36 Hawk (Hawk Model 75).',
        year_in_service: 1939,
        country_of_origin: 'United States',
        operators: 'US, Australia, Brazil, Canada, China, Finland, New Zealand, South Africa, UK, USSR',
        max_speed: 345,
        max_range: 750,
        ceiling: 31000,
        engines: '1 Piston 1200hp Allison V-1710-81',
        img_url: 'http://thumbs.media.smithsonianmag.com//filer/a0/f5/a0f5d2ec-1582-4e2a-9934-7ffde005275a/first_response.jpg__800x600_q85_crop.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        name: 'North American B-25 Mitchell',
        description: 'The North American B-25 Mitchell is a twin-engined medium bomber aircraft produced by the US-American manufacturer North American Aviation.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, Australia, Brazil, Canada, China, France, Netherlands, UK, USSR',
        max_speed: 275,
        max_range: 1350,
        ceiling: 24200,
        engines: '2 Radial 1700 hp Wright R-2600-29 Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/North_American_B-25_Mitchell_G%C3%B3raszka_2007.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        name: 'Bell P-39 Airacobra',
        description: 'The Bell P-39 Airacobra is a single-engine single-seat fighter and fighter bomber aircraft produced by the US-American manufacturer Bell Aircraft Corporation. The Bell P-39 was the world\'s first fighter aircraft with tricycle landing gear and rear-mounted engine. The Soviet Air Force was the largest P-39 operator with approx. 5000 aircraft.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, USSR, Australia, France, UK',
        max_speed: 386,
        max_range: 650,
        ceiling: 36000,
        engines: '1 Piston 1200hp Allison V-1710-83',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/P-39N.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 8,
        name: 'Bell P-63 Kingcobra',
        description: 'The Bell P-63 Kingcobra is a single-engine single-seat fighter and fighter bomber aircraft produced by the US-American manufacturer Bell Aircraft Corporation. The Bell P-63 is a development of the Bell P-39 Airacobra. The Soviet Air Force was the largest P-63 operator with approx. 2500 aircraft.',
        year_in_service: 1942,
        country_of_origin: 'United States',
        operators: 'US, USSR',
        max_speed: 410,
        max_range: 450,
        ceiling: 43000,
        engines: '1 Piston 1325hp Allison V-1710-93',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Bell_P-63_Kingcobra_in_flight.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 9,
        name: 'Consolidated PBY/PBN/PBV/OA-10 Catalina/Canso',
        description: 'The Consolidated PBY Catalina is a twin-engined multi-role flying boat or amphibious aircraft produced by the US-American manufacturer Consolidated Aircraft Corporation. The PBY Catalina was produced in several variants by Consolidated, Naval Aircraft Factory, Canadian Vickers, Boeing Canada and in Russia. The early produced variants were flying boats whereas the later variants were amphibious aircraft with retractable landing gear',
        year_in_service: 1935,
        country_of_origin: 'United States',
        operators: 'US, Australia, Brazil, Canada, France, Norway, UK, USSR',
        max_speed: 124,
        max_range: 2504,
        ceiling: 15800,
        engines: '2 Radial 1200hp Pratt & Whitney R-1830-92 Twin Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Consolidated_PBY-5A_Catalina_in_flight_c1942.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 10,
        name: 'Grumman F4F/FM Wildcat/Martlet ',
        description: 'The Grumman F4F Wildcat is a single-engine single-seat carrier-based fighter aircraft produced by the US-American manufacturer Grumman Aircraft Engineering Corporation. F4F were operated by the United States Navy, United States Marine Corps, Royal Navy Fleet Air Arm and the Royal Canadian Air Force. The F4F in service with the Royal Navy Fleet Air Arm were designated Marlet. The variant FM-1 (1220 aircraft) and FM-2 (4777 aircraft) were produced by the Eastern Aircraft division of General Motors.',
        year_in_service: 1940,
        country_of_origin: 'United States',
        operators: 'US, UK',
        max_speed: 319,
        max_range: 771,
        ceiling: 39500,
        engines: '1 Radial 1200hp Pratt & Whitney R-1830-36 Twin Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/F4F-3_new_pitot_tube_of_later_model.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 11,
        name: 'Douglas SBD Dauntless / A-24 Banshee',
        description: 'The Douglas SBD Dauntless is a single-engine two-seat carrier-based dive bomber aircraft produced by the US-American manufacturer Douglas Aircraft Company. The Douglas A-24 Banshee is a land-based variant in service with the United States Army Air Force (USAAF). The DBD Dauntless is a development of the Northrop BT-1.',
        year_in_service: 1940,
        country_of_origin: 'United States',
        operators: 'US, New Zealand',
        max_speed: 254,
        max_range: 773,
        ceiling: 25200,
        engines: '1 Radial 1350hp Wright R-1820-66 Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Dauntless_bomb_drop.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 12,
        name: 'Lockheed P-38 Lightning',
        description: 'The Lockheed P-38 Lightning is a twin-engined single-seat fighter and fighter bomber aircraft produced by the US-American manufacturer Lockheed Corporation. Reconaissance variants of the P-38 were designated F-4 & F-5 Lightning.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, Australia, China',
        max_speed: 414,
        max_range: 1100,
        ceiling: 44000,
        engines: '2 Piston 1475hp Allison V-1710-113',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Lockheed_P-38J_Lightning_-_1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 13,
        name: 'Consolidated B-24/LB-30/PB4Y-1 Liberator',
        description: 'The Consolidated PB4Y-2 Privateer is a four-engine long-range maritime patrol aircraft produced by the US-American manufacturer Consolidated Vultee Aircraft Corporation. Designation of the PB4Y-2 changed to P4Y-2 in 1951. The PB4Y-2 Privateer is a development of the Consolidated B-24 Liberator.',
        year_in_service: 1940,
        country_of_origin: 'United States',
        operators: 'US, Australia, Canada, UK',
        max_speed: 237,
        max_range: 2819,
        ceiling: 21000,
        engines: '4 Radial 1350hp Pratt & Whitney R-1830-94 Twin Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Maxwell_B-24.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 14,
        name: 'North American P-51 Mustang',
        description: 'The North American P-51 Mustang is a single-engine single-seat fighter aircraft produced by the US-American manufacturer North American Aviation. The North American A-36 Apache / Mustang was a dive bomber variant (500 built). The Packard V-1650 is a license-built variant of the Rolls-Rolls Merlin engine, which was also used on the Hawker Hurricane and the Supermarine Spitfire. The P-51 Mustang was also licence-built by the Commonwealth Aircraft Corporation (CAC) in Australia as the CA-18 Mustang, including 80 P-51D assembled from North American produced parts as CA-17',
        year_in_service: 1942,
        country_of_origin: 'United States',
        operators: 'US, UK, Australia, ROC, France, South Africa, USSR',
        max_speed: 437,
        max_range: 2079,
        ceiling: 42000,
        engines: '1 Piston 1695hp Packard V-1650-7',
        img_url: 'http://www.aresgames.eu/wp/wp-content/uploads/2013/10/700xP51_Mustang4.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 15,
        name: 'Boeing B-17 Flying Fortress/Fortress',
        description: 'The Boeing B-17 Flying Fortress (Model 299) is a four-engine heavy bomber aircraft produced by the US-American manufacturer Boeing Company. The Boeing B-17 Flying Fortress was operated during World War II by the US Army Air Forces and the british Royal Air Force.',
        year_in_service: 1940,
        country_of_origin: 'United States',
        operators: 'US, UK, Canada',
        max_speed: 288,
        max_range: 2000,
        ceiling: 35600,
        engines: '4 Radial 1200hp Wright R-1820-97 Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Color_Photographed_B-17E_in_Flight.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 16,
        name: 'Douglas C-47/R4D Skytrain/Dakota',
        description: 'The Douglas DC-3 is a twin-engined short-to-medium-range Airliner with a capacity of maximum 32 passengers and a military utility transport aircraft produced by the US-American manufacturer Douglas Aircraft Company. The military main-variant was the C-47 Skytrain. The DC-3 is a development of the Douglas DC-2. The DC-3/C-47 was produced in countless variants. After WWII thousands of surplus C-47 Skytrain were converted to be used as civil airliners. The Lisunov Li-2 was a copied variant of the DC-3 with production in the Soviet Union. The DC-3 was also license-produced in Japan as Nakajima L2D. Today (2010) many DC-3 remain in commercial operation. The Basler BT-67 is one of the turboporp conversion variants of the DC-3.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, Brazil, Canada, France, India, New Zealand, UK',
        max_speed: 230,
        max_range: 2135,
        ceiling: 23200,
        engines: '2 Radial 1200hp Pratt & Whitney R-1830-S1C3-G Twin Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Douglas_C-47_Skytrain.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 17,
        name: 'Martin B-26 Marauder',
        description: 'The Martin B-26 Marauder is a twin-engined medium bomber produced by the US-American manufacturer Glenn L. Martin Company. The B-26 Marauder was operated by the US Army Air Forces, the US Navy, the Royal Air Force and the South African Air Force.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, France, UK, South Africa',
        max_speed: 285,
        max_range: 1100,
        ceiling: 20700,
        engines: '2 Radial 2000hp Pratt & Whitney R-2800-43 Double Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/B_26.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 18,
        name: 'Douglas A-26 Invader',
        description: 'The Douglas A-26 Invader is twin-engined three-seat light bomber aircraft produced by the US-American manufacturer Douglas Aircraft Company. The A-26 was redesignated B-26 in 1948. Many Invader were converted to executive passenger transport aircraft for six- to eight passenger afer their military service.',
        year_in_service: 1944,
        country_of_origin: 'United States',
        operators: 'US',
        max_speed: 354,
        max_range: 1401,
        ceiling: 22100,
        engines: '2 Radial 2000hp Pratt & Whitney R-2800-27 Double Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Douglas_A-26_Invader.JPG',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 19,
        name: 'Grumman F6F Hellcat/Gannet',
        description: 'The Grumman F6F Hellcat is a single-engine single-seat carrier-based fighter and fighter bomber aircraft produced by the US-American manufacturer Grumman Aircraft Engineering Corporation. Main operators were the United States Navy, the United States Marine Corps and the Royal Navy Fleet Air Arm.',
        year_in_service: 1940,
        country_of_origin: 'United States',
        operators: 'US, UK',
        max_speed: 380,
        max_range: 945,
        ceiling: 37300,
        engines: '1 Radial 2000hp Pratt & Whitney R-2800-10W Double Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Hellcats_F6F-3%2C_May_1943.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 20,
        name: 'Grumman TBF/TBM Avenger',
        description: 'The Grumman TBF Avenger is a single-engine three-seat torpedo bomber aircraft produced by the US-American manufacturer Grumman Aircraft Engineering Corporation and the Eastern Aircraft division of General Motors, then designated TBM Avenger. Some Avengers were converted to water-bombers after their military service.',
        year_in_service: 1942,
        country_of_origin: 'United States',
        operators: 'US, UK, New Zealand',
        max_speed: 267,
        max_range: 1130,
        ceiling: 23400,
        engines: '1 Radial 1900hp Wright R-2600-20 Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Grumman_TBF_Avenger.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 21,
        name: 'Curtiss SB2C Helldiver/A-25 Shrike ',
        description: 'The Curtiss SB2C Helldiver is a single-engine two-seat carrier-based dive bomber aircraft produced by the US-American manufacturer Curtiss-Wright Airplane Company. The Curtiss Helldiver was also license-built in Canada by Fairchild-Canada and Canadian Car & Foundry.',
        year_in_service: 1943,
        country_of_origin: 'United States',
        operators: 'US, Australia, UK',
        max_speed: 296,
        max_range: 1165,
        ceiling: 29100,
        engines: '1 Radial 1900hp Wright R-2600-20 Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Curtiss_SB2C_col.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 22,
        name: 'Republic P-47 Thunderbolt',
        description: 'The Republic P-47 Thunderbolt is a single-engine single-seat fighter and fighter-bomber aircraft produced by the US-American manufacturer Republic Aviation Corporation.',
        year_in_service: 1941,
        country_of_origin: 'United States',
        operators: 'US, Australia, China',
        max_speed: 433,
        max_range: 475,
        ceiling: 42000,
        engines: '1 Radial 2500hp Pratt & Whitney R-2800-59W Double Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Republic_P-43_Lancer.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 23,
        name: 'Vought F4U/FG Corsair',
        description: 'The Vought F4U Corsair is a single-engine single-seat fighter aircraft produced by the US-American manufacturer Vought Sikorsky Aircraft, later by the Vought Division of United Aircraft Corp.. The Corsair was developed as a carrier-based fighter but was also operated land-based. The F4U Corsair was also produced by Goodyear as the FG Corsair and Brewster as the F3U Corsair.',
        year_in_service: 1942,
        country_of_origin: 'United States',
        operators: 'US, UK, New Zealand',
        max_speed: 417,
        max_range: 1015,
        ceiling: 36900,
        engines: '1 Radial 2000hp Pratt & Whitney R-2800-8 Double Wasp',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 24,
        name: 'Boeing B-29 Superfortress',
        description: 'The Boeing B-29 Superfortress (Model 345) is a four-engine long-range heavy bomber aircraft produced by the US-American manufacturer Boeing Company. The B-29 Superfortress was equipped with pressurized areas for the crew for the ability to operate in greater heights. The B-29 was the first aircraft that dropped nuclear bombs (Enola Gay, Hiroshima and Bockscar, Nagasaki).',
        year_in_service: 1944,
        country_of_origin: 'United States',
        operators: 'US',
        max_speed: 358,
        max_range: 6847,
        ceiling: 33600,
        engines: '4 Radial 2206hp Wright R-3350-23 Duplex Cyclone',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/B-29_in_flight.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 25,
        name: 'Focke-Wulf Fw 190A-3/U4, A-4/U4 & A-5/U4',
        description: 'The Focke-Wulf Fw 190 is a single-engine single-seat fighter aircraft produced by the German manufacturer Focke-Wulf Flugzeugbau GmbH, designed by Kurt Tank. The Fw 190 was also used as a fighter-bomber and reconnaissance aircraft. The Focke-Wulf Fw 190 was the second standard-fighter of the German Luftwaffe during WWII beside the Messerschmitt Bf 109. The Fw 190 was produced in Germany by Focke-Wulf, Gerhard-Fieseler-Werke, Arado Flugzeugwerke, AGO Flugzeugwerke, Norddeutsche Dornier-Werke, Weser-Flugzeugbau, Leichtbau Budweis and Ernst Heinkel Flugzeugwerke (Oranienburg).',
        year_in_service: 1941,
        country_of_origin: 'Germany',
        operators: 'Germany',
        max_speed: 426,
        max_range: 519,
        ceiling: 39370,
        engines: '1 Piston 1777hp Junkers Jumo 213A-1',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Fw_190A-3_JG_2_in_Britain_1942.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 26,
        name: 'Messerschmitt Bf 109E-5/F-6/G-4',
        description: 'The Messerschmitt Bf 109 is a single-engine single-seat fighter aircraft produced by the German manufacturer Bayerische Flugzeugwerke, later Messerschmitt AG. The Bf 109 is the worlds most produced fighter aircraft and the most produced aircraft in World War II. The Bf 109 remained in production after WWII in Spain and Czechoslovakia with the further developments Hispano Aviación HA-1112 and Avia S-99 / S-199.',
        year_in_service: 1937,
        country_of_origin: 'Germany',
        operators: 'Germany',
        max_speed: 386,
        max_range: 448,
        ceiling: 38550,
        engines: '1 Piston 1455hp Daimler-Benz DB 605AM',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Me109_G-6_D-FMBB_1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 27,
        name: 'Mitsubishi A6M Zero',
        description: 'The Mitsubishi A6M known as the Zero is a single-engine single-seat fighter and fighter bomber aircraft produced by the Japanese manufacturer Mitsubishi Heavy Industries, operated during WWII by the Imperial Japanese Navy.',
        year_in_service: 1940,
        country_of_origin: 'Japan',
        operators: 'Japan',
        max_speed: 331,
        max_range: 1119,
        ceiling: 32808,
        engines: '1 Radial 950hp Nakajima NK1C Sakae 12',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/A6M3_Zero_N712Z_1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 28,
        name: 'Junkers Ju 87',
        description: 'The Junkers Ju 87 is a single-engine two-seat dive bomber aircraft produced by the German manufacturer Junkers Flugzeug- und Motorenwerke AG. The Ju 87 was operated by the German Luftwaffe, the Regia Aeronautica (Italian Royal Air Force), the Bulgarian Air Force und the Royal Romanian Air Force. Production of the Ju 87 was carried out by Junkerwerke and Weser-Flugzeugbau.',
        year_in_service: 1937,
        country_of_origin: 'Germany',
        operators: 'Germany, Bulgaria',
        max_speed: 236,
        max_range: 373,
        ceiling: 26575,
        engines: '1 Piston 1200hp Junkers Jumo 221 Da',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Junkers_Ju_87Ds_in_flight_Oct_1943.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 29,
        name: 'Messerschmitt Me 262',
        description: 'The Messerschmitt Me 262 is a two-engined multi role jet fighter aircraft produced by the German manufacturer Messerschmitt AG. Developed in world war II for the German Luftwaffe of the Third Reich, the Me 262 was operational as a fighter, night fighter, interceptor, fighter bomber and as a reconnaissance aircraft. The Messerschmitt Me 262 was the world\'s first operational jet fighter aircraft. The fighter variants were called Schwalbe (swallow), the fighter bomber variant Sturmvogel (petrel).',
        year_in_service: 1944,
        country_of_origin: 'Germany',
        operators: 'Germany',
        max_speed: 541,
        max_range: 562,
        ceiling: 37567,
        engines: '2 Turbojet 1978lbf Junkers Jumo 004B-1',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 30,
        name: 'Supermarine Spitfire PR',
        description: 'The Supermarine Spitfire is a single-engine single-seat fighter aircraft produced by the British manufacturer Supermarine Aviation Works (Vickers) Ltd, later the Supermarine Division of Vickers-Armstrongs (Aircraft) Ltd. The Spitfire was used by the Royal Air Force and allied countries during WWII. The Spitfire was built in many variants with several wing configurations, engines and propellers. One of the variants is the Seafire, which is a carrier-based naval version. The total production numbers include 20334 Spitfire and additional 2556 Seafire in all versions. It is the British aircraft with the highest production numbers.',
        year_in_service: 1938,
        country_of_origin: 'United Kingdom',
        operators: 'UK, US, USSR',
        max_speed: 369,
        max_range: 1135,
        ceiling: 36500,
        engines: '1 Piston 1478hp Rolls-Royce Merlin 45',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Ray_Flying_Legends_2005-1.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ])
      .then(() => {
        return knex.raw(
        "SELECT setval('airplanes_id_seq', (SELECT MAX(id) FROM airplanes));"
        );
      });
    });
};


//
// $('.mw-headline').filter(function() {
//   const data = $(this);
//
//   category = data.text();
//
//   console.log(category);
//
//   json.category = category;
// });
