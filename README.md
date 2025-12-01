# Automação iOS - EBAC Store

## Automação de Testes com Appium e WebdriverIO

### Objetivo do Repositório

Este repositório contém teste automatizado para a aplicação iOS da EBAC Store. Utilizando Appium para automação móvel e WebdriverIO (WDIO) como framework de testes, esses testes asseguram a funcionalidade. Os relatórios de teste são gerados utilizando Allure.

### Pré-requisitos para Rodar

Para executar os testes deste projeto, você precisará:

- **Appium Server**: Instalado na máquina.
- **Node**: Instalado na máquina.
- **Java**: Instalado na máquina.
- **Simulador iOS**: Necessário para rodar os testes em um ambiente virtual.
- **Macbook**: A execução dos testes requer um Macbook devido à necessidade do simulador do iPhone.

### Como Rodar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/Lucassev05/ios-automation-ebac.git
   cd ios-automation-ebac
   ```

2. **Instale as Dependências**:

   ```bash
   sudo npm install
   ```

3. **Inicie o Appium**:
   Certifique-se de que o Appium está instalado e rodando na sua máquina na porta 4723.

4. **Execute os Testes**:

   ```bash
   npm run test
   ```

   Isso executará o comando `wdio run ./wdio.ios.conf.js` para iniciar a suíte de testes.

5. **Visualize os Relatórios**:
   Os relatórios de teste serão gerados utilizando Allure. Para visualizá-los, utilize:
   ```bash
   npm run allure
   ```

### Observações

1. **Appium error: connect ECONNREFUSED 127.0.0.1:8100**: Isso ocorre devido ao Webdriveagent não ter sido instalado automaticamente no simulador. Nesse caso deve rodar novamente o teste ou tentar executar o appium com o seguinte comando:

```bash
   appium --default-capabilities "{\"appium:systemPort\":9001}" --relaxed-security
```
