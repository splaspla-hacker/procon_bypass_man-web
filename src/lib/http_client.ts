import axios from 'axios';
import { PbmStats } from "../types/pbm_stats";
import { Button } from "../types/button";

interface DirPathApiResponse {
  result: string,
  root_path: string,
}

interface SettingPathApiResponse {
  result: string,
  setting_path: string,
}

interface PostApiResponse {
  result: string,
}

interface StatsApiResponse {
  stats: PbmStats,
  result: string,
  pid: number | null,
}

interface SettingType {
  prefix_keys_for_changing_layer: Array<Button>,
}

interface SettingApiResponse {
  result: string,
  setting: SettingType,
}

export class HttpClient {
  constructor() {
  };

  getDirPath() {
    const path = "/api/pbm_root__path";
    return axios.get<DirPathApiResponse>(`/api/pbm_root_path`);
  }

  postDirPath(dirPath: string) {
    return axios.post<PostApiResponse>(`/api/pbm_root_path`, { root_path: dirPath });
  }

  getSettingPath() {
    return axios.get<SettingPathApiResponse>( "/api/pbm_setting_path");
  }

  postSettingPath(settingPath: string) {
    const path = "/api/pbm_setting_path"
    return axios.post<PostApiResponse>(`${path}`, { setting_path: settingPath });
  }

  getPbmStats() {
    const path = "/api/pbm_stats";
    return axios.get<StatsApiResponse>(`${path}`);
  }

  startPbm() {
    const path = "/api/start_pbm";
    return axios.post<PostApiResponse>(`${path}`);
  }

  stopPbm() {
    const path = "/api/stop_pbm";
    return axios.post<PostApiResponse>(`${path}`);
  }

  getSetting() {
    return axios.get<SettingApiResponse>( "/api/pbm_setting");
  }
}
