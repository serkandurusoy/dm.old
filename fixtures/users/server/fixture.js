Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    var today = new Date();
    today = new Date(today.setUTCHours(0,0,0,0));

    var userArray = [
      {
        _id : 'egcfeiQe3eHs4pjgJ',
        avatar : 'https://lh6.googleusercontent.com/--50UBeNoAZU/AAAAAAAAAAI/AAAAAAAAA6U/Ji_CGUF5FH4/photo.jpg',
        createdAt : today,
        email : 'admin@dragoman-turkey.com',
        lastName : 'Turkey',
        name : 'Dragoman',
        services : {
          google : {
            accessToken : 'ya29.KgGKqxmoy7kYrDsCfL8zVS17Kg3td0sP1-y5njS_li7x7nj6qPDp3ks9Prt8-13vAAo85KnqvX7ygA',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMTY3OTI2MTIyODE1NDY2NDMyOTEiLCJzdWIiOiIxMTY3OTI2MTIyODE1NDY2NDMyOTEiLCJhenAiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImFkbWluQGRyYWdvbWFuLXR1cmtleS5jb20iLCJhdF9oYXNoIjoiT09YcFdZcktXYm92M2dKVUc3STVxQSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJoZCI6ImRyYWdvbWFuLXR1cmtleS5jb20iLCJ0b2tlbl9oYXNoIjoiT09YcFdZcktXYm92M2dKVUc3STVxQSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJjaWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJpYXQiOjE0MjUzMzAzOTgsImV4cCI6MTQyNTMzNDI5OH0.xvjsLRnb33zyTIHkSJgqbNOH9XTsYCpsP59EWjDlIdmXzLkKDyj_erIJpsCgzs5VGjNH-3cQ-T_o8Fm0U4wzH47SiTbSTlojIAmRntQooWmSwFPYJ6IwmpPnADfRM7Vp45Rp1mZRehDPDxN5TawLBrtdFNiuNa9YI-MmjXtFHg4',
            expiresAt : today,
            id : '116792612281546643291',
            email : 'admin@dragoman-turkey.com',
            verified_email : true,
            name : 'Dragoman Turkey',
            given_name : 'Dragoman',
            family_name : 'Turkey',
            picture : 'https://lh6.googleusercontent.com/--50UBeNoAZU/AAAAAAAAAAI/AAAAAAAAA6U/Ji_CGUF5FH4/photo.jpg',
            locale : 'en',
            gender : 'other'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      },
      {
        _id : 'N8wYqobjcmruAZNmi',
        avatar : 'https://lh4.googleusercontent.com/-erDYsbJnWL4/AAAAAAAAAAI/AAAAAAAAAAw/afLzNs5dQIk/photo.jpg',
        createdAt : today,
        email : 'elif@dragoman-turkey.com',
        lastName : 'Turgut',
        name : 'Elif',
        services : {
          google : {
            accessToken : 'ya29.KgGcFlsx4WEwFhncK_7SS_TQo_10SuKw1nmLRV6tYAisz3VQlo97y81TsqLN7CorWOBCANCQcNPP4Q',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMTE2ODM0MDQ1NzA0ODUzNDE2NjMiLCJzdWIiOiIxMTE2ODM0MDQ1NzA0ODUzNDE2NjMiLCJhenAiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImVsaWZAZHJhZ29tYW4tdHVya2V5LmNvbSIsImF0X2hhc2giOiJxOW9yamxlaTBiMUFad09reUVhcVd3IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF1ZCI6IjcwNzk5NTQyMTY4Ni0zOGphMGlxdmdkN3J2MXAzcGszbGRqMHMxY29odTMxZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImhkIjoiZHJhZ29tYW4tdHVya2V5LmNvbSIsInRva2VuX2hhc2giOiJxOW9yamxlaTBiMUFad09reUVhcVd3IiwidmVyaWZpZWRfZW1haWwiOnRydWUsImNpZCI6IjcwNzk5NTQyMTY4Ni0zOGphMGlxdmdkN3J2MXAzcGszbGRqMHMxY29odTMxZC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImlhdCI6MTQyNTMzMDUyOCwiZXhwIjoxNDI1MzM0NDI4fQ.oyPVuZfVWu6q0oVPuT-KgWXAWSrOpKhtAr-pFcO0Lt_gAh1Wuj8ZalQiugdBlN-HSvjLOkW45_oqJY_nuOnascan0LmEB1oWleCOPRDJXfhJML3p4YyBBkT8Jfq_Sq9E5V2Vw-CNGfS_4608mgpGNI9NwFmyMWf32crDcAe-KzY',
            expiresAt : today,
            id : '111683404570485341663',
            email : 'elif@dragoman-turkey.com',
            verified_email : true,
            name : 'Elif Turgut',
            given_name : 'Elif',
            family_name : 'Turgut',
            picture : 'https://lh4.googleusercontent.com/-erDYsbJnWL4/AAAAAAAAAAI/AAAAAAAAAAw/afLzNs5dQIk/photo.jpg',
            locale : 'en',
            gender : 'female'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      },
      {
        _id : 'mYtS9L9Q755u4fXCX',
        avatar : 'https://lh6.googleusercontent.com/-TENurIm1njI/AAAAAAAAAAI/AAAAAAAAABs/iPv4q9ql7Gs/photo.jpg',
        createdAt : today,
        email : 'kevser@dragoman-turkey.com',
        lastName : 'Mermertaş',
        name : 'Kevser',
        services : {
          google : {
            accessToken : 'ya29.KgENJJDZH2v9Esg6nqAnGAMvCQfoUf_G3BOSbl7KKqYL90-pplHc4cfY5qF6V-tmet6_jRpQ1QAJZw',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMTA0MzQwNDc5Mjk4NTE0NTAwODEiLCJzdWIiOiIxMTA0MzQwNDc5Mjk4NTE0NTAwODEiLCJhenAiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImtldnNlckBkcmFnb21hbi10dXJrZXkuY29tIiwiYXRfaGFzaCI6ImZGUC1PRmlsY2JwVUNVOEcwbTlHRGciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXVkIjoiNzA3OTk1NDIxNjg2LTM4amEwaXF2Z2Q3cnYxcDNwazNsZGowczFjb2h1MzFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaGQiOiJkcmFnb21hbi10dXJrZXkuY29tIiwidG9rZW5faGFzaCI6ImZGUC1PRmlsY2JwVUNVOEcwbTlHRGciLCJ2ZXJpZmllZF9lbWFpbCI6dHJ1ZSwiY2lkIjoiNzA3OTk1NDIxNjg2LTM4amEwaXF2Z2Q3cnYxcDNwazNsZGowczFjb2h1MzFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaWF0IjoxNDI1MzMwNzc5LCJleHAiOjE0MjUzMzQ2Nzl9.ez4Vx-UZs433U3yxFffhOfzsY5ykzceINGNUXOiTtBkht_N588Tv09DG21apaqSsLtD3KjQHabIc_zImH94DI86gC7D3az6rO5YfW2ioXVJgC1YePc9m6r-rvQCOzsSn5jUgMmt315GgzAcHM8RGAi-uxmxWh-TT2xKd5Y9isD8',
            expiresAt : today,
            id : '110434047929851450081',
            email : 'kevser@dragoman-turkey.com',
            verified_email : true,
            name : 'Kevser Mermertaş',
            given_name : 'Kevser',
            family_name : 'Mermertaş',
            picture : 'https://lh6.googleusercontent.com/-TENurIm1njI/AAAAAAAAAAI/AAAAAAAAABs/iPv4q9ql7Gs/photo.jpg',
            locale : 'en',
            gender : 'female',
            'refreshToken' : '1/VeEskxEaGCr6axE1Fll4ClE_exksHatkAYmAJHssDOUMEudVrK5jSpoR30zcRFq6'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      },
      {
        _id : '7LDCcdeyYDLz4ycPf',
        avatar : 'https://lh3.googleusercontent.com/-PJUX0FNGVek/AAAAAAAAAAI/AAAAAAAAAAg/Y8ZZoQmGchA/photo.jpg',
        createdAt : today,
        email : 'murat@dragoman-turkey.com',
        lastName : 'Draman',
        name : 'Murat',
        services : {
          google : {
            accessToken : 'ya29.KgHJT95orYJTYE3ZBThjRMsmxRe_XGDXluX4PhzO_VRRW-cveSEqZ-P2JQxL2BZ3TE7JxJIT6ZKXyA',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMTQ0ODgzNTg2NDQ2NjI1NzM0MzkiLCJzdWIiOiIxMTQ0ODgzNTg2NDQ2NjI1NzM0MzkiLCJhenAiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im11cmF0QGRyYWdvbWFuLXR1cmtleS5jb20iLCJhdF9oYXNoIjoiTzdpTno5aktDaE04Y1NjcDlNT0ZMUSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJoZCI6ImRyYWdvbWFuLXR1cmtleS5jb20iLCJ0b2tlbl9oYXNoIjoiTzdpTno5aktDaE04Y1NjcDlNT0ZMUSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJjaWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJpYXQiOjE0MjUzMzA4OTcsImV4cCI6MTQyNTMzNDc5N30.gHBpxYAMrXuG3YZ5zv0W8r31FeQU0j3HxSfvMA1id5DEtrZCAeFwO_O8wVpyEkB9w6roZwueCxPQCp8aezqLDjF78yJ5E9YfKgjGTAgSayQafouiwvXU6Y7rixsrV4S8yFRPQgCgQblFzjcM86klJoGUl4PskMLmAFawirncsYE',
            expiresAt : today,
            id : '114488358644662573439',
            email : 'murat@dragoman-turkey.com',
            verified_email : true,
            name : 'Murat Draman',
            given_name : 'Murat',
            family_name : 'Draman',
            picture : 'https://lh3.googleusercontent.com/-PJUX0FNGVek/AAAAAAAAAAI/AAAAAAAAAAg/Y8ZZoQmGchA/photo.jpg',
            locale : 'en',
            gender : 'male',
            'refreshToken' : '1/DK43YloK47m6wCdO43vmT1BEH6E2B_rj8xfz7E1X-P0'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      },
      {
        _id : 'yGx7kJm6iNaYRzyEd',
        avatar : 'https://lh4.googleusercontent.com/-O0tlpDoRAG8/AAAAAAAAAAI/AAAAAAAAAAw/F3GKQifc-po/photo.jpg',
        createdAt : today,
        email : 'ozan@dragoman-turkey.com',
        lastName : 'Atabilen',
        name : 'Ozan',
        services : {
          google : {
            accessToken : 'ya29.KgGiUQoOTDU0OmDF0SKOi9VKMs2xvMlvPA3-iHHbx1JpyTRv-m_cq7duxy7Pc2nRSUKmdoORmT7n9w',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwic3ViIjoiMTA5ODQzODA5ODY0OTQ1NTg4NTcwIiwiYXpwIjoiNzA3OTk1NDIxNjg2LTM4amEwaXF2Z2Q3cnYxcDNwazNsZGowczFjb2h1MzFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiZW1haWwiOiJvemFuQGRyYWdvbWFuLXR1cmtleS5jb20iLCJhdF9oYXNoIjoiQVZrSzU4WHlTT2twaVBWdW1VdlZVdyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJoZCI6ImRyYWdvbWFuLXR1cmtleS5jb20iLCJpYXQiOjE0MjUzMzExMDAsImV4cCI6MTQyNTMzNTAwMH0.IiVrEpMQ8ScGCY8Afa6rPPRAih8NsnhOB9-TpEUFTf9yZl8Kdn_bBs43f6tRYnOwYTGaGsUO_e6Yoe7KfuwFA_M1XV2_vMhwdOismw9fPAsgnbDn8QumVpAfAYxS-Qu6_ZjVOOX33ExAHDK9xe-i7OuS6mKHr4vx_Pe67b3e68U',
            expiresAt : today,
            id : '109843809864945588570',
            email : 'ozan@dragoman-turkey.com',
            verified_email : true,
            name : 'Ozan Atabilen',
            given_name : 'Ozan',
            family_name : 'Atabilen',
            picture : 'https://lh4.googleusercontent.com/-O0tlpDoRAG8/AAAAAAAAAAI/AAAAAAAAAAw/F3GKQifc-po/photo.jpg',
            locale : 'en',
            gender : 'male',
            'refreshToken' : '1/qbgscgqixeqlnLaADlRXaPX03gAlrWqxx1RsmK2fJNA'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      },
      {
        _id : "tJ3b5qqBcEJJLtGG8",
        createdAt : today,
        services : {
          google : {
            accessToken : "ya29.cwEbOEvOk1_EcgHcD0E9FXBGrHSf2kwnYvXKrsedlBeXAAEL2s3XW2oot3BOyv9XQR02QMGumoUzKg",
            idToken : "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxN2I1OTMxYzc4MzAzMWQ5NzBjMWEyNTUyMjY2MjE1NTk4YTk4MTQifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwic3ViIjoiMTA4ODE1NDM4NTE2NDk0NTE2NTc3IiwiYXpwIjoiNzA3OTk1NDIxNjg2LTM4amEwaXF2Z2Q3cnYxcDNwazNsZGowczFjb2h1MzFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiZW1haWwiOiJzZXJrYW4uZHVydXNveUBkbmEtdHIuY29tIiwiYXRfaGFzaCI6InNUTVFfUml4Umx0SF9zYktqT3g1NmciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXVkIjoiNzA3OTk1NDIxNjg2LTM4amEwaXF2Z2Q3cnYxcDNwazNsZGowczFjb2h1MzFkLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaGQiOiJkbmEtdHIuY29tIiwiaWF0IjoxNDMxNjM2MzY0LCJleHAiOjE0MzE2Mzk5NjR9.cJ2w3KFiWtqkF4l5y6eOuZ6cPMuP5MwOOHZMFVO8_cjoL7tGm0YH_XO-K9ajrB6jAaKM0j3Ub6OGUD2pia1oTLpwNe9opUbeLCewnPucZ_7WVnCfSKRcQkW3sWFq1h17MMA8K0DgvY8f2_7D6dT4PBC6ugc1_CiJqKo2oK602qQ",
            expiresAt : today,
            id : "108815438516494516577",
            email : "serkan.durusoy@dna-tr.com",
            verified_email : true,
            name : "Serkan Durusoy",
            given_name : "Serkan",
            family_name : "Durusoy",
            picture : "https://lh5.googleusercontent.com/-JkwI2k5msWM/AAAAAAAAAAI/AAAAAAAAAE4/A-aSWtI-TS4/photo.jpg",
            locale : "en",
            refreshToken : "1/kyivIIg36lP4hGO8XrvbC9KiA6kTIfkCURgDH9caKv8",
            gender : "male"
          },
          resume : {
            loginTokens : [ ]
          }
        },
        name : "Serkan",
        lastName : "Durusoy",
        email : "serkan.durusoy@dna-tr.com",
        avatar : "https://lh5.googleusercontent.com/-JkwI2k5msWM/AAAAAAAAAAI/AAAAAAAAAE4/A-aSWtI-TS4/photo.jpg"
      },
      {
        _id : 'PHizj47j3RKm9nem5',
        avatar : 'https://lh5.googleusercontent.com/-Cjwa1SNSWrI/AAAAAAAAAAI/AAAAAAAAAAA/wpQvn6eHA3k/photo.jpg',
        createdAt : today,
        email : 'sinem@dragoman-turkey.com',
        lastName : 'Çopur',
        name : 'Sinem Bircan',
        services : {
          google : {
            accessToken : 'ya29.KgFgP3B3IlP89wdsHTfLGTibuXxWpBdKG7tNnoFer2wHtDSgirXzFM3Z_-SOLNwNUX_5klMcCII47g',
            idToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhODEzMzhlMmFmOGVlZjA0ODE5OTA2MzgwZDBkOTZmNjBmNzI4ZjYifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMDY4MzY2NDk0MzU1ODEyOTQzMTIiLCJzdWIiOiIxMDY4MzY2NDk0MzU1ODEyOTQzMTIiLCJhenAiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6InNpbmVtQGRyYWdvbWFuLXR1cmtleS5jb20iLCJhdF9oYXNoIjoibTA5WHZlZDFwVTgyTWhmb3poajJ2dyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJoZCI6ImRyYWdvbWFuLXR1cmtleS5jb20iLCJ0b2tlbl9oYXNoIjoibTA5WHZlZDFwVTgyTWhmb3poajJ2dyIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJjaWQiOiI3MDc5OTU0MjE2ODYtMzhqYTBpcXZnZDdydjFwM3BrM2xkajBzMWNvaHUzMWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJpYXQiOjE0MjUzMzEyOTgsImV4cCI6MTQyNTMzNTE5OH0.kcdDXUOlQ7zGQ82-mjgRypUONfpi8LUzClC5crwUdGJdjvvVuW66G_ckxWeyxOq_BULMi7-8vwx_VZ8q5VXQcQAtDBiS4SYpzfO7Han0yV6qvt93wWbxAHA4AAegetvwIMa-XwzjO7y4a-BrhlJwSxIR7tp0NxbSVw5pwiOstXg',
            expiresAt : today,
            id : '106836649435581294312',
            email : 'sinem@dragoman-turkey.com',
            verified_email : true,
            name : 'Sinem Bircan Çopur',
            given_name : 'Sinem Bircan',
            family_name : 'Çopur',
            picture : 'https://lh5.googleusercontent.com/-Cjwa1SNSWrI/AAAAAAAAAAI/AAAAAAAAAAA/wpQvn6eHA3k/photo.jpg',
            locale : 'en',
            gender : 'female',
            'refreshToken' : '1/Hdezdrg64UAIg2pt_-qghm4Z6-2qVhn7axR0v6YgHzc'
          },
          resume : {
            loginTokens : [ ]
          }
        }
      }
    ];

    Meteor.users.remove({});
    _.each(userArray, function (user) {
      Meteor.users.insert(user);
    });

  }

  // TODO: tum userlari buraya al ve bilgilerini UPSERT ile guncelle

  IsCounts.remove({});

  Meteor.users.find().forEach(function(user) {
      var islerimCnt = Isler.find({
        durum: 'Açık',
        sorumlusu: user._id
      }).count();
      var verdigimIslerCnt = Isler.find({
        durum: 'Açık',
        sahibi: user._id
      }).count();
      var ilgilendigimIslerCnt = Isler.find({
        durum: 'Açık',
        sorumlusu: {$ne: user._id},
        sahibi: {$ne: user._id},
        _id: {$in: Ilgililer.find({ilgili: user._id}).map(function(ilgili){return ilgili.is;})}
      }).count();

      IsCounts.insert({
        user: user._id,
        islerim: islerimCnt,
        ilgilendigimIsler: ilgilendigimIslerCnt,
        verdigimIsler: verdigimIslerCnt
      });

    });

});
