import "./Main.css";
import ChartTempo from "../charts/saldoTempo";
import ChartPrazo from "../charts/prazoMedio";
import ChartIOF from "../charts/quantIOF";


const Main = () => {
  return (
    <main>
      <div className="main__container">

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Clientes</p>
              <span className="font-bold text-title">45.873</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-dollar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Taxa média da Carteira</p>
              <span className="font-bold text-title">2.467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-arrow-up fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Quantidade de Resgates (d-1)</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-arrow-down fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Quantidade de Aplicações (d-1)</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Saldo</h1>
                <p>Evolução do saldo no tempo</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <ChartTempo />
          </div>

          <div className="charts__right__IOF">
            <div className="charts__right__title" >
            <div>
                <h1>Resgates com IOF</h1>
                <p>Volumetria de resgates com IOF </p>
              </div>
              <i className="fa fa-legal" aria-hidden="true"></i>
            </div>
            <ChartIOF />
          </div>
        </div>

        {/* <!-- CHARTS ENDS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
            <div>
                <h1>Prazo Médio</h1>
                <p>Evolução do prazo médio da carteira</p>
              </div>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
            </div>
             <ChartPrazo />   
          </div>

          <div className="charts__right__IOF">
            <div className="charts__right__title" >
            <div>
                <h1>Taxa Média</h1>
                <p>Evolução da taxa média da carteira</p>
              </div>
              <i className="fa fa-percent" aria-hidden="true"></i>
            </div>
            <ChartPrazo />
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
            <div>
                <h1>Quantidade de Clientes</h1>
                <p>Evolução da quantidade de clientes</p>
              </div>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
            </div>
             <ChartPrazo />   
          </div>

          <div className="charts__right__IOF">
            <div className="charts__right__title" >
            <div>
                <h1>Quantidade de Operações</h1>
                <p>Evolução da quantidade de operações</p>
              </div>
              <i className="fa fa-percent" aria-hidden="true"></i>
            </div>
            <ChartPrazo />
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Resgates</h1>
                <p>descrição</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Ticket médio de aplicação</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Ticket médio de resgates</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Prazo médio de resgates</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
          
          <div className="charts__right">
            <div className="charts__right__title">
            <div>
                <h1>Aplicação</h1>
                <p>Evolução do volume de aplicações</p>
              </div>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
            </div>
             <ChartPrazo />   
          </div>

        </div>

      </div>
    </main>
  );
};

export default Main;