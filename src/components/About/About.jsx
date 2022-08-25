import React from "react";
import "./about.scss";

import MiLogo from "../../assets/logomi.png";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

const About = () => {
  return (
    <div className="Main">
      <div className="AboutDiv">
        <h1 className="titleAbout">О нас</h1>
        <img className="LogoMi" src={MiLogo} />
      </div>

      <div className="Logotype">
        <h1 className="titleXiaomi">Фирменный магазин Xiaomi в Ташкенте</h1>
        <p className="title1">
          Наш магазин специализируется на продаже исключительно оригинальной
          продукции быстро набирающего популярность, относительно нового бренда
          Xiaomi.
        </p>
        <p className="title2">
          Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году
          под девизом — «инновации для всех», и за это время поднялась в топ
          мировых производителей смартфонов <br /> и умной электроники. Также в
          последние годы компания стала разрабатывать умную электронику для
          дома, задача которой является безопасность вас и ваших близких.
        </p>
        <p className="title3">
          Девиз компании «Инновации для каждого», и мы с большим удовольствием
          добавим их в вашу жизнь.
        </p>
        <p className="title4">Ждем Вас в нашем магазине)</p>
      </div>

      <div className="SpaceDiv">
        <div className="calendarDiv">
          <CalendarMonthIcon className="calendar" />
          <p className="titleCl">Большой опыт</p>
        </div>
        <div className="starDiv">
          <StarPurple500SharpIcon className="star" />
          <p className="titleStr">Только Оригинальная продукция</p>
        </div>
        <div className="wrenchDiv">
          <BuildRoundedIcon className="wrench" />
          <p className="titleWr">Надежный сервис</p>
        </div>
      </div>

      <div className="WorkTable">
        <p className="grafikWork">Режим работы</p>
        <p className="workDay">Понедельник: с 10:00 до 19.00</p>
        <p className="workDay">Вторник: с 10.00 до 19.00</p>
        <p className="workDay">Среда: с 10.00 до 19.00</p>
        <p className="workDay">Четверг: с 10.00 до 19.00</p>
        <p className="workDay">Пятница: с 10.00 до 19.00</p>
        <p className="workDay">Суббота: с 10.00 до 19.00</p>
        <p className="workDay">Воскресенье: с 11.00 до 18.00</p>
      </div>
    </div>
  );
};

export default About;
