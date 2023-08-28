import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '25b2fe445amshe7ee13236eac6a1p12b06cjsnfab348beb93b',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '25b2fe445amshe7ee13236eac6a1p12b06cjsnfab348beb93b')
                return headers
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query:()=>'/charts/track' }),
            getSongDetails: builder.query({ query: ({ songid }) =>`/shazam-songs/get-details?id=${songid}` }),

        }), 

    })

    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi