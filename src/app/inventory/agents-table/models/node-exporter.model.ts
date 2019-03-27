export class NodeExporterModel {
  agent_id: string;
  custom_labels: Array<string>;
  listen_port: number;
  pmm_agent_id: string;
  status: string;
  agentType: string;
  isDeleted: boolean;

  constructor(params, type) {
    this.agentType = type;
    this.isDeleted = false;
    this.agent_id = params.agent_id || '';
    this.custom_labels = params.custom_labels && Object.keys(params.custom_labels).length ? Object.values(params.custom_labels) : [];
    this.listen_port = params.listen_port || '';
    this.pmm_agent_id = params.pmm_agent_id || '';
    this.status = params.status || '';
  }
}
