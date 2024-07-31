import React from "react";
import {
  AutoComplete,
  Avatar,
  Badge,
  ConfigProvider,
  Drawer,
  Dropdown,
  Image,
  Input,
  Layout,
  Space,
  theme,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../image/ecommerce.jpg";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useAppContext } from "../ContextApi";

import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../user /Order";
import { logout } from "../../redux/slices/LoginSlices";
import { fetchSearchProduct } from "../../services/AllProduct";



const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const iteminfo = [
    { name: "", link: "/logo" },
    { name: "About us", link: "/aboutus" },
    { name: "Contact us", link: "/contactus" },
    { name: "Blog", link: "/blog" },
  ];

  const authinfo = [
    { name: "Login", link: "/auth/login" },
    { name: "Sign up", link: "/auth/signup" },
  ];

  const navigate = useNavigate();
  const { appState } = useAppContext();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    navigate(item.link);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickdrawer = () => {
    if (carditem?.addtocard?.data?.length >= 1) {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const navigates = useNavigate();
  const gotohome = () => {
    navigates("/");
  };

  const carditem = useSelector((state) => state);

  const items = [
    {
      key: "1",
      label: "Profile",
      onClick: () => navigatee("/user/userprofile"),
    },
    { key: "2", label: "Logout", onClick: () => handleLogout() },
    { key: "3", label: "Settings" },
  ];
  const navigat = useNavigate();
  const navigatee = () => {
    navigat("/user/userprofile");
  };
  const handleLogout = () => {
    dispatch(logout());
  };
const handleSearch = (value)=>{
  console.log("searchdata", value);
  dispatch(fetchSearchProduct(value.target.value))
};
const  {products,loading}=useSelector(
  (state)=> state?.searchproduct
)
console.log("datasearch", products.data)
  


  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#001529",
            headerColor: "rgba(0, 0, 0, 0.88)",
            headerHeight: 40,
            fontSize: 16,
            footerBg: "#f5f5f5",
          },
        },
      }}
    >
      <Layout>
        <Header
          className="sticky top-0 hover:cursor-pointer"
          style={{
            zIndex: 1000,
            width: "100%",
            background: "#001529",
            color: "rgba(0, 0, 0, 0.88)",
            height: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="header">
            <div className="flex md:justify-center items-center gap-x-1">
              <div className="h-34 w-[34px]">
                <Image src={logo} alt=" display" />
              </div>
              <div
                className="text-white justify-between items-center font-extrabold m-auto"
                onClick={() => gotohome()}
              >
                Koselie
              </div>
            </div>




            
            <div className="iteminfo">
              {iteminfo?.map((item) => (
                <div key={item.link}>{item.name}</div>
              ))}
            </div>
            <div>
<AutoComplete
      popupMatchSelectWidth={252}
      style={{
        width: 380,
      }}
      // options={options}
      // onSelect={onSelect}
      // onSearch={handleSearch}
      options={products.data}
      
      
      size="large"
    >
      <Input.Search size="large" placeholder="input here" enterButton onPressEnter={handleSearch} />
    </AutoComplete>
</div>


            <div className="flex  items-center gap-3 px-2 text-white">
            <div className="iteminfo">
              <div>
                {carditem?.authinfo?.userToken && (
                  <Dropdown
                    menu={{ items }}
                    onClick={(e) => e.preventDefault()}
                  >
                    
                      <Space>
                        <Avatar icon={<UserOutlined />} />
                        <div>Anmol</div>
                      </Space>
                    
                  </Dropdown>
                )}
              </div>
            </div>
              <div>
              
              
                <Badge count={carditem?.addtocard?.data?.length} size="small">
                  <Avatar
                    icon={<ShoppingCartOutlined />}
                    size="small"
                    onClick={handleClickdrawer}
                  />
                </Badge>
              </div>
              {authinfo.map((item) => (
                <div key={item.link} onClick={() => handleClick(item)}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </Header>
        <Content style={{ padding: "0 48px", marginTop: "40px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className=" flex justify-center ">
      <div className=" flex gap-10">
        <div><h1>About</h1>
        Contact Us
        About us

        </div>
        <div> Group Companies</div>
        <div> Help</div>
        <div> Consumer Policy</div>
        <div> Mail us:</div>
        <div> Registered Office Address:</div>
      </div>
        </Footer>
      </Layout>
      <div>
        {open && appState?.addtocard?.length >= 1 && (
          <Drawer title="Cart Drawer" onClose={onClose} visible={open}>
            <Order />
          </Drawer>
        )}
      </div>
    </ConfigProvider>
  );
};

export default UserLayout;
