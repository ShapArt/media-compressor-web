#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::Serialize;
use tauri::Manager;
use tokio::process::Command;

#[derive(Serialize)]
struct ProbeResult {
    stdout: String,
    stderr: String,
}

#[tauri::command]
async fn ffprobe(path: String) -> Result<ProbeResult, String> {
    let output = Command::new("ffprobe")
        .arg("-v")
        .arg("error")
        .arg("-show_format")
        .arg("-show_streams")
        .arg(&path)
        .output()
        .await
        .map_err(|e| e.to_string())?;
    Ok(ProbeResult {
        stdout: String::from_utf8_lossy(&output.stdout).to_string(),
        stderr: String::from_utf8_lossy(&output.stderr).to_string(),
    })
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ffprobe])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
