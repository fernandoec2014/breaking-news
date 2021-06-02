import React from 'react'
import Card from '@material-ui/core/Card';

import Header from './header'
import Footer from './footer'
import Body from './body'

import Grid from '@material-ui/core/Grid';

const CardItem = ({ item }) => {

  return (
    <>
      <Grid item
        xs={12} sm={6}
        style={{ display: 'flex', border: '1px solid grey', padding: 10 }}>

        <Grid container justify="center">

          <Grid item xs={12} sm={8}>
            <Card
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' ,border: 'none', boxShadow: 'none', paddingRight: 10 }} >
              <Header item={item} />
              <Body item={item} />
              <Footer item={item} />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>

            <Card
              style={{ display: 'flex',flexDirection: 'column', border: 'none', boxShadow: 'none' }} >
              <img src={item.image} alt='' />
            </Card>

          </Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default CardItem
