// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'
import ResultsLayout from 'src/layouts/ResultsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Set wrap={ResultsLayout} showNavigation={true} selectAnotherCable={true}>
          <Route path="/submarine-cable/{id}" page={SubmarineCablePage} name="submarineCable" />
          <Route path="/multiselect/{id}" page={MultiselectPage} name="multiselect" />
          <Route path="/landing-point/{id}" page={LandingPointPage} name="landingPoint" />
          <Route path="/country/{id}" page={CountryPage} name="country" />
          <Route path="/ready-for-service/{id}" page={ReadyForServicePage} name="readyForService" />
          <Route path="/supplier/{id}" page={SupplierPage} name="supplier" />
        </Set>
        <Set wrap={ResultsLayout} showNavigation={true}>
          <Route path="/status/{id}" page={StatusPage} name="status" />
        </Set>
        <Set wrap={ResultsLayout} fullWidth={true}>
          <Route path="/" page={HomePage} name="home" prerender />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
