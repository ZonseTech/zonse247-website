export const POS_UPDATES_URL = "https://pos.zonse247.com/updates/";
export const POS_INSTALLER_URL = `${POS_UPDATES_URL}Zonse247_POS_Setup.exe`;

export type PosRelease = {
  version: string;
  url: string;
  size: number | null;
  releasedAt: string | null;
};

function field(yaml: string, key: string) {
  return yaml.match(new RegExp(`^\\s*${key}:\\s*'?([^'\\n]+)'?\\s*$`, "m"))?.[1].trim() ?? null;
}

export async function getPosRelease(): Promise<PosRelease | null> {
  try {
    const res = await fetch(`${POS_UPDATES_URL}latest.yml`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const yaml = await res.text();
    const version = field(yaml, "version");
    const path = field(yaml, "path");
    if (!version || !path) return null;
    const size = Number(field(yaml, "size"));
    return {
      version,
      url: new URL(path, POS_UPDATES_URL).toString(),
      size: Number.isFinite(size) && size > 0 ? size : null,
      releasedAt: field(yaml, "releaseDate"),
    };
  } catch {
    return null;
  }
}
