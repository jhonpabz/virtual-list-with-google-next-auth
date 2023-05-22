'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Typography } from '@mui/material';

import axios from 'axios';

export const VirtualList: React.FC = ({}) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const url = `https://dummyjson.com/products?limit=100`;
    try {
      const { data: productsData } = await axios.get(url);

      setData(productsData);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText
            primary={data?.products[index].title}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  {data?.products[index].description}
                </Typography>
              </Fragment>
            }
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <AutoSizer>
      {({ width, height }: any) => (
        <FixedSizeList
          width={width}
          itemData={data?.products}
          height={height}
          itemCount={data?.limit}
          itemSize={90}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};
