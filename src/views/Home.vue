<template>
  <div id="home">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
              <menu-item name="1-1">
                  <Icon type="ios-navigate"></Icon>
                  <span>导航</span>
              </menu-item>
              <menu-item name="1-2">
                  <Icon type="ios-search"></Icon>
                  <span>查询</span>
              </menu-item>
              <menu-item name="1-3">
                  <Icon type="ios-settings"></Icon>
                  <span>设置</span>
              </menu-item>
          </Menu>
          <div slot="trigger"></div>
      </Sider>
      <Layout>
          <Header class="layout-header-bar header">
            <img class="logo" src="../assets/logo.png" alt="">
              <div class="face"></div>
              <a class="esc" href="#">退出</a>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure sequi a necessitatibus repellat commodi labore eaque distinctio, voluptatum culpa ipsum atque. Voluptate expedita temporibus nulla nesciunt in quasi esse!
          </Content>
      </Layout>
  </Layout>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>

<style lang="less"  scoped>
  .ivu-layout-header.header {
    height: 50px;
    position: relative;
    background:#9400D3;

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      top: -42px;
      left: -20px;
    }

    .face {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: url(../assets/face.png);
      position: absolute;
      top: 5px;
      right: 60px;
    }

    .esc {
      color: #fff;
      position: absolute;
      right: 19px;
      top: -5px;
    }

    .esc:hover {
      color: #2d8cf0;
    }
  }

  .ivu-layout-sider {
    background:#9400D3;

    .ivu-menu.ivu-menu-dark.ivu-menu-vertical.menu-item {
      background:#9400D3;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
      background: #8604be;
    }

    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
      background:#6e069a;
    }

  }
</style>