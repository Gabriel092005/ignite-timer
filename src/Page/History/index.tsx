import { HistoryContainer, HistoryList, Status } from "./style";


export function History() {
    return (
        <HistoryContainer>
        <h1>Meu Historico</h1>
        <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duracao</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20min</td>
                        <td>Há 2 meses</td>
                        <td>
                        <Status StatusColor ="green">Concluido</Status>
                        </td>
                   
                     
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20min</td>
                        <td>Há 2 meses</td>
                        <td>
                        <Status StatusColor ="Yellow">Em andamento</Status>
                        </td>
              
                     
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20min</td>
                        <td>Há 2 meses</td>
                        <td>
                        <Status StatusColor ="red">Interrompido</Status>
                        </td>
                   
                     
                    </tr>
                </tbody>
            </table>
        </HistoryList>
        </HistoryContainer>
    
    )
}