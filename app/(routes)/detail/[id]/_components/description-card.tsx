import { Flag } from "lucide-react";

const DescriptionCard = () => {
  return (
    <div>
      <h1 className=" text-base md:text-2xl text-white font-bold">
        Description
      </h1>
      <p className="mt-2 text-gray-100">
        Услуги электрика. Опыт 20 лет. Оперативный выезд 24/7. ГАРАНТИЯ.
        Недорого. 935860014 <br /> <br /> Делаю всё, от замены розетки до
        электрики под ключ. По необходимости имеется бригада мастеров, все с
        большим опытом.
      </p>
      <br />
      <p className="text-gray-100">
        Сифатли плетёный пластик стол ва стуллар сотилади, хар хил рангларда. -
        Замонавий ва чиройли дизайн; - Стол ва стуллар чидамли, бемалол 200 кг.
        гача кутаради. - Ойнасиз стол стуллар билан нархи 2 050 000 сум. -
        Вилоятлар учун заказ берилганда Тошкентдаги Вилоятларга катновчи юк
        машиналари питагигача олиб бориб берилади. Тел: +998 97 433 82 00, +998
        90 049 00 55
      </p>
      <hr className="mt-7" />
      <div className="mt-6 flex items-center justify-between">
        <p className="text-white text-xs">ID: 54780224</p>
        <p className="text-white text-xs">Просмотров: 1105</p>
        <div className="flex items-center gap-x-1">
          <Flag className="size-4 text-white" />
          <p className="text-white text-xs">Complain</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
