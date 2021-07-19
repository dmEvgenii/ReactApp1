import React from 'react'
import {render} from 'react-dom'
import  App from './components/App'
import Logo from './components/Logo.js'
import Head from './components/Head.js'
import { Link } from "react-router-dom"




render(<Head/>,document.getElementById('Head'))

render(<App/>,document.getElementById('body'))
