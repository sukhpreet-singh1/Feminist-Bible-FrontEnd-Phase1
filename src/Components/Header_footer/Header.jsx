import { Button, Toolbar as ToolBar, AppBar } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

import CityLogo from '../ui/icons';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      style={{
        boxShadow: 'none',
        backgroundColor: '#98c5e9',
        padding: '10px 0px',
        borderBottom: '2px solid #00285e'
      }}>
      <ToolBar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link linkTo="/" width="70px" height="70px" />
          </div>
        </div>

        <Link href="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link href="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
      </ToolBar>
    </AppBar>
  );
}
