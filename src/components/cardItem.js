import React from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

import Header from './header'
import Footer from './footer'
import Body from './body'

const CardItem = ({ item }) => {

  return (
    <>
      <Grid item
        xs={12} sm={6}
        style={{ border: '1px solid grey', padding: 30 }}>
        <Grid container 
          justify='center'
          alignItems='center'
        >
          {
            item.image ? (
              <>
                <Grid item xs={12} sm={8} >
                  <Card
                    style={{ flexDirection: 'column', justifyContent: 'space-between', paddingRight: 25 }} >
                    <CardActionArea href={item.url} target='_blank' rel='noopener noreferrer'>
                      <Header item={item} />
                      <Body item={item} />
                      <Footer item={item} />
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Card
                    style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }} >
                    <img src={item.image} alt='' />
                  </Card>
                </Grid>
              </>
            ) : (
              <Grid item xs={12} sm={12} >
                <Card >
                  <CardActionArea href={item.url} target='_blank' rel='noopener noreferrer'>
                    <Header item={item} />
                    <Body item={item} />
                    <Footer item={item} />
                  </CardActionArea>
                </Card>
              </Grid>
            )
          }
        </Grid>
      </Grid>
    </>
  )
}

export default CardItem
